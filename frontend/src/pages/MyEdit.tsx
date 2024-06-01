import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { useNavigate, useParams, useLocation } from 'react-router-dom'

function MyEdit() {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const navigate = useNavigate()
    const location = useLocation();
    useEffect(() => {
        const t = location.state?.title
        const c = location.state?.content
        setTitle(t)
        setContent(c)
    }, [])

    const {id} = useParams()

    const postData = async() => {
        try{
            const response = await axios.put(`${BACKEND_URL}/api/v1/blog`,
                {
                    title,
                    content,
                    id
                },{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
        })
            if(!response){
                alert("Something went wrong")
                navigate('/blogs')
            }
            alert("Blog edited successfully")
            navigate('/myblog/' + response.data.blog.id)
        }catch(err){
            alert("Something went wrong")
        }
    }
    return (
    <>
    <Navbar authorName='Michael'/>
    <div className='max-w-screen-xl flex flex-col justify-center mx-4 lg:mr-[210px] lg:ml-[210px] mt-9'>
        <div>
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-900e">Title</label>
                <input type="text" id="default-input" className="bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" onChange={(e) => setTitle(e.target.value)} value={title} placeholder="Enter your title"/>
            </div>
        </div>
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Content</label>
            <textarea id="message" rows={10} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg
            border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your thoughts here..." onChange={(e) => setContent(e.target.value)} value={content}></textarea>
        </div>
        <button className="text-white font-medium bg-blue-500 py-2 px-4 w-[150px] h-[50px] rounded-xl mt-6 cursor-pointer" onClick={postData}>
            Submit
        </button>
    </div>
</>
)
}

export default MyEdit