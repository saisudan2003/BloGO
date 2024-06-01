import {Link} from 'react-router-dom'

interface BlogCardProps {
    id: string,
    authorName: string,
    publishedDate: string,
    title: string,
    content: string
}
function EditBlogCard({id, authorName, publishedDate, title, content}: BlogCardProps) {
    return (
        <>
            <Link to={`/myblog/${id}`}>
            <div className="ml-3">
                <div className="flex mt-7 items-center">
                    <Avatar name={authorName}/>
                    <h1 className='ml-2 font-medium'>{authorName}</h1>
                    <div className='ml-2 font-medium h-[5px] w-[5px] rounded-full bg-gray-400'></div>
                    <h1 className='ml-2 font-medium text-gray-400'>{publishedDate}</h1>
                </div>
                <h1 className='mt-4 text-2xl lg:text-3xl font-bold'>{title}</h1>
                <h1 className='lg:text-lg font-semibold text-gray-700'>{content.length > 100 ? content.slice(0,150)+"..." : content}</h1>
                <h1 className='font-medium text-gray-400 mt-3'>{Math.ceil(content.length / 100)+" min read"}</h1>
                <div className='h-[1px] mt-5 w-[700px] bg-slate-200'></div>
            </div>
            </Link>
    
        </>
    )
}

export default EditBlogCard

interface AvatarType{
    name: string
}
function Avatar ({name}: AvatarType) {
    return (
        <div className="relative inline-flex items-center justify-center w-7 h-7 overflow-hidden
         bg-gray-500 rounded-full">
            <span className="font-medium text-white">{name[0]}</span>
        </div>
    )
}