import {PrismaClient} from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {Hono} from 'hono'
import {sign,verify,decode} from 'hono/jwt'
import { createBlogInput, updateBlogInput } from '@saisudansv/blog-common'
type Variables = {
    userId: string
}
type JWTpayload = {
    id: string
}
export const blogRouter = new Hono<{Bindings: {DATABASE_URL: string, JWT_SECRET: string}, Variables: Variables}>()

blogRouter.use('/*',async (c,next) => {
    const jwt = c.req.header('Authorization');
	if (!jwt) {
		c.status(401);
		return c.json({ error: "no Auth header" });
	}
	const token = jwt.split(' ')[1];
    const payload = await verify(token, c.env.JWT_SECRET) as JWTpayload
	if (!payload) {
		c.status(401);
		return c.json({ error: "unauthorized" });
	}
	c.set('userId', payload.id);
	await next()
})

blogRouter.post('/', async (c) => {
    const body = await c.req.json()
    const {success} = createBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({message: "Invalid Inputs"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
    const blog = await prisma.post.create({
        data: {
            title: body.title,
            content: body.content,
            authorId: userId
        },
        select: {
            id: true
        }
    })
    if(!blog){
        c.status(403)
        return c.json({error: "something went wrong"})
    }
    return c.json({message:"success",blog:blog})
})

blogRouter.put('/', async (c) => {
    const body = await c.req.json()
    const {success} = updateBlogInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({message: "Invalid Inputs"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
    const blog = await prisma.post.update({
        where: {
            id: body.id,
            authorId: userId
        },
        data: {
            title: body.title,
            content: body.content
        },
        select: {
            id: true
        }
    })
    if(!blog){
        c.status(403)
        return c.json({error: "Update unsuccessful"})
    }
    return c.json({message:"success",blog:blog})
})

blogRouter.get('/all', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const blogs = await prisma.post.findMany({
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    if(!blogs){
        c.status(403)
        return c.json({error: "Internal server error"})
    }

    return c.json({message:"success",blogs:blogs})
})

blogRouter.get('/myblogs', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
    const blogs = await prisma.post.findMany({
        where: {
            authorId: userId
        },
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })

    if (blogs.length === 0) {
        c.status(403)
        return c.json({error: "No blogs found"})
    }

    return c.json({message:"success", blogs: blogs})
})

blogRouter.get('/:id', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const userId = c.get('userId')
    const blog = await prisma.post.findUnique({
        where: {
            id: c.req.param('id')
        },
        select: {
            content: true,
            title: true,
            id: true,
            author: {
                select: {
                    name: true
                }
            }
        }
    })
    if(!blog){
        c.status(403)
        return c.json({error: "blog not found"})
    }
    return c.json({message:"success",blog:blog})
})




//https://backend.saisudan6.workers.dev

