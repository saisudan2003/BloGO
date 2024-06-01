import React from 'react'
import Navbar from '../components/Navbar'
import { useMyBlogs } from '../hooks'
import EditBlogCard from '../components/EditBlogCard'

function MyBlogs() {
    const {loading, blogs} = useMyBlogs()
    if(!blogs) {
        return <>
            <Navbar authorName="Michael"/>
            <div className='h-screen lg:text-5xl text-3xl flex justify-center mt-5'>No blogs found</div>
        </>
    }
    if(loading) {
        return <>
            <Navbar authorName="Michael"/>
            <div className='h-screen max-w-2xl mx-auto'>
                <div role="status" className="animate-pulse mt-5">
                <div className="flex items-center mb-5">
                    <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                    <div className="h-[15px] w-[200px] bg-gray-200 rounded-full ml-2 "></div>
                </div>

                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-4"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-2.5"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-5"></div>
                    <div className="h-[15px] bg-gray-200 rounded-full max-w-[230px] mb-5"></div>
                    <div className='h-[1px] mt-5 bg-gray-200'></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="animate-pulse mt-5">
                <div className="flex items-center mb-5">
                    <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                    <div className="h-[15px] w-[200px] bg-gray-200 rounded-full ml-2 "></div>
                </div>

                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-4"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-2.5"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-5"></div>
                    <div className="h-[15px] bg-gray-200 rounded-full max-w-[230px] mb-5"></div>
                    <div className='h-[1px] mt-5 bg-gray-200'></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="animate-pulse mt-5">
                <div className="flex items-center mb-5">
                    <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                    <div className="h-[15px] w-[200px] bg-gray-200 rounded-full ml-2 "></div>
                </div>

                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-4"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-2.5"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-5"></div>
                    <div className="h-[15px] bg-gray-200 rounded-full max-w-[230px] mb-5"></div>
                    <div className='h-[1px] mt-5 bg-gray-200'></div>
                    <span className="sr-only">Loading...</span>
                </div>
                <div role="status" className="animate-pulse mt-5">
                <div className="flex items-center mb-5">
                    <div className="h-7 w-7 bg-gray-200 rounded-full"></div>
                    <div className="h-[15px] w-[200px] bg-gray-200 rounded-full ml-2 "></div>
                </div>

                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-2.5"></div>
                    <div className="h-[20px] bg-gray-200 rounded-full max-w-[530px] mb-4"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-2.5"></div>
                    <div className="h-[18px] bg-gray-200 rounded-full max-w-[400px] mb-5"></div>
                    <div className="h-[15px] bg-gray-200 rounded-full max-w-[230px] mb-5"></div>
                    <div className='h-[1px] mt-5 bg-gray-200'></div>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </>
    }
  return (
    <>
        <Navbar authorName="Michael"/>
       
        <div className='flex lg:ml-[400px] cursor-pointer'>
            <div className='max-w-2xl min-w-screen-2xl'>
                {blogs.map((blog, index) => (
                    <EditBlogCard key={index} id={blog.id} authorName={blog.author.name || "Anonymous"} publishedDate={"Dec 3,2023"} title={blog.title} content={blog.content}/>
                ))}
            </div>
        </div>
    </>
  )
}

export default MyBlogs