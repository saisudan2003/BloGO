import React from 'react'

function FullBlogAuthor({authorName}: {authorName: string}) {
  return (
    <div className='h-screen flex flex-col ml-[50px] mt-[100px]'>
        <h1 className="font-medium text-lg">Author</h1>
        <div className='grid grid-cols-5'>
            <div className='col-span-1 mt-4'>
            <Avatar name={authorName}/>
            </div>
            <div className='col-span-3'>
            <h1 className="font-bold lg:text-3xl text-2xl">{authorName}</h1>
            <h1 className="font-medium text-gray-500 lg:text-large">Master of mirth, purveyour of puns, and the funniest person in the kingdom.</h1>
            </div>
        </div>
    </div>
  )
}

export default FullBlogAuthor

interface AvatarType{
    name: string
}
function Avatar ({name}: AvatarType) {
    return (
        <div className="relative inline-flex items-center justify-center w-9 h-9 overflow-hidden
         bg-gray-500 rounded-full mt-4">
            <span className="font-medium text-white">{name[0]}</span>
        </div>
    )
}