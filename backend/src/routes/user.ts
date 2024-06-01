import { PrismaClient } from "@prisma/client/edge"
import { withAccelerate } from "@prisma/extension-accelerate"
import { Hono } from "hono"
import { sign, verify, decode } from "hono/jwt"
import {signupInput, signinInput} from '@saisudansv/blog-common'
import {z} from 'zod'
type Variables = {
    userId: String
}
type JWTpayload = {
    id: String
}
export const userRouter = new Hono<{Bindings: {DATABASE_URL: string, JWT_SECRET: string}, Variables: Variables}>()

userRouter.post('/signup', async (c) => {
    const body = await c.req.json()
    const {success} = signupInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({message: "Invalid Inputs"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    
    const user = await prisma.user.create({
        data:{
            email: body.email,  
            password: body.password,
            name: body.name
        }
    })
    if(!user){
        c.status(403)
        return c.json({error: "something went wrong"})
    }
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({message:"success",jwt:token})
})

userRouter.post('/signin', async (c) => {
    const body = await c.req.json()
    const {success} = signinInput.safeParse(body)
    if(!success){
        c.status(411)
        return c.json({message: "Invalid Inputs"})
    }
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const user = await prisma.user.findUnique({
        where: {
            email: body.email,
            password: body.password
        }
    })
    if(!user){
        c.status(403)
        return c.json({error: "Invalid Credentials"})
    }
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({message:"success",jwt:token})
})