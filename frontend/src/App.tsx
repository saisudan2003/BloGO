import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Blog from './pages/Blog.tsx'
import Signin from './pages/Signin.tsx'
import Signup from './pages/Signup.tsx'
import Blogs from './pages/Blogs.tsx'
import Publish from './pages/Publish.tsx'
import MyBlogs from './pages/MyBlogs.tsx'
import MyBlog from './pages/MyBlog.tsx'
import MyEdit from './pages/MyEdit.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" replace />} />
          <Route path="/signin" element={<Signin />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/blog/:id" element={<Blog />}/>
          <Route path="/blogs" element={<Blogs />}/>
          <Route path="/publish" element={<Publish />}/>
          <Route path="/myblogs" element={<MyBlogs />}/>
          <Route path="/myblog/:id" element={<MyBlog />}/>
          <Route path="/edit/:id" element={<MyEdit />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App