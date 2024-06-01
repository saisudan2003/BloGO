import {useState, useEffect} from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../config'

interface Blog {
    "id": string,
    "title": string,
    "content": string,
    "author": {
        "name": string
    }
}
export const useBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchData= async() => {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/all`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setBlogs(response.data.blogs)
            setLoading(false)
        }catch(e){
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {
        loading,
        blogs
    }
}

export const useBlog = ({id} : {id:string}) => {
    const [loading, setLoading] = useState(true)
    const [blog, setBlog] = useState<Blog>()

    const fetchData= async() => {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setBlog(response.data.blog)
            setLoading(false)
        }catch(e){
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {
        loading,
        blog
    }
}

export const useMyBlogs = () => {
    const [loading, setLoading] = useState(true)
    const [blogs, setBlogs] = useState<Blog[]>([])

    const fetchData= async() => {
        try{
            const response = await axios.get(`${BACKEND_URL}/api/v1/blog/myblogs`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            setBlogs(response.data.blogs)
            setLoading(false)
        }catch(e){
            alert("Something went wrong")
        }
    }

    useEffect(() => {
        fetchData()
    },[])

    return {
        loading,
        blogs
    }
}