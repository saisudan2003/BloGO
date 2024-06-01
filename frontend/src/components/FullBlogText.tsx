import React from 'react'

function FullBlogText({title, content}: {title: string, content: string}) {
  return (
    <>
        <div className='h-screen flex flex-col mt-[60px] lg:mt-[100px]'>
            <h1 className="font-bold lg:text-5xl text-3xl lg:ml-[55px] ml-[35px] mr-[40px]">{title}</h1>
            <h1 className='lg:text-md text-sm font-medium lg:ml-[57px] ml-[35px] text-gray-500 mt-3'>Posted on August 29, 2022</h1>
            <h1 className='font-medium lg:text-xl text-lg lg:ml-[57px] ml-[35px] mt-[40px] mr-3'>{content}</h1>
        </div>
    </>
  )
}

export default FullBlogText