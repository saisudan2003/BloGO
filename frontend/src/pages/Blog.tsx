import React from 'react'
import { useParams } from 'react-router-dom'
import { useBlog } from '../hooks'
import FullBlogText from '../components/FullBlogText'
import FullBlogAuthor from '../components/FullBlogAuthor'
import Navbar from '../components/Navbar'


function Blog() {
  const {id} = useParams()
  if (!id) {
    return <>
    <h1>Something went wrong</h1>
    </>
  } 
  const {loading,blog} = useBlog({id})
  if(loading){
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
  if(!blog){
    return <>
    <h1>Something went wrong</h1>
    </>
  }
  return (
    <>
      <Navbar authorName='Michael'/>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
        <div className='col-span-1 lg:col-span-2'>
        <FullBlogText title={blog.title} content={blog.content} />
        </div>
        <div className='hidden lg:block'>
        <FullBlogAuthor authorName={blog.author.name || "Sarah"}/>
        </div>
      </div>
    </>

  )
  
}

export default Blog