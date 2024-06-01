import BlogCard from '../components/BlogCard'
import Navbar from '../components/Navbar'
import { useBlogs } from '../hooks'


function Blogs() {
    const {loading, blogs} = useBlogs()
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
       
        <div className='flex justify-center cursor-pointer'>
            <div className='max-w-2xl'>
                {blogs.map((blog, index) => (
                    <BlogCard key={index} id={blog.id} authorName={blog.author.name || "Anonymous"} publishedDate={"Dec 3,2023"} title={blog.title} content={blog.content}/>
                ))}
                <BlogCard 
                    id="ffvdfsvdsfv"
                    authorName="Michael" 
                    publishedDate="Dec 3, 2023" 
                    title="How a Simple Single-Page Website Earns $500 a Month Without Affiliate Marketing" 
                    content="Discover the journey of a minimalist single-page website that generates 
                    $500 a month without relying on affiliate marketing. Learn the key strategies and 
                    techniques used to achieve this consistent revenue stream through effective content 
                    creation and audience engagement."
                />

                <BlogCard 
                id="nvnvnfjjdj"
                authorName="Sarah" 
                publishedDate="Jan 15, 2024" 
                title="10 Tips for Boosting Your Productivity While Working from Home" 
                content="Working from home presents unique challenges, but with the right strategies, 
                you can maintain high productivity levels. In this post, we explore ten practical tips to 
                help you stay focused, manage your time effectively, and create a productive home office environment."
                />
            </div>
        </div>
    </>
  )
}

export default Blogs