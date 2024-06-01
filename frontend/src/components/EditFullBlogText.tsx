import { useNavigate, useParams } from 'react-router-dom'

function EditFullBlogText({title, content}: {title: string, content: string}) {
    const {id} = useParams()
    const navigate = useNavigate()
    const transferData = () => {
        navigate(`/edit/${id}`, {state: {title: title, content: content}})
    }
    return (
        <>
            <div className='h-screen flex flex-col mt-[40px] lg:mt-[70px]'>
                <button className="text-white font-medium ml-[55px] w-[90px] bg-blue-500 py-2 px-7 rounded-lg mr-4 cursor-pointer" onClick={transferData}>Edit</button>
                <h1 className="font-bold lg:text-5xl text-3xl lg:ml-[55px] ml-[35px] mr-[40px]">{title}</h1>
                <h1 className='lg:text-md text-sm font-medium lg:ml-[57px] ml-[35px] text-gray-500 mt-3'>Posted on August 29, 2022</h1>
                <h1 className='font-medium lg:text-xl text-lg lg:ml-[57px] ml-[35px] mt-[40px] mr-3'>{content}</h1>
            </div>
        </>
    )
}

export default EditFullBlogText