import React from 'react'
import SideBar from '../components/SideBar'
import Header from '../components/Header'
import BlogCard from '../components/BlogCard'
import { useState } from 'react'

const Home = () => {

  const [blogs,setBlogs] = useState(JSON.parse(localStorage.getItem("posts"))||[]);

    
  return (
    <div className='flex gap-1'>
        <SideBar />
        <div className='w-full'>
        <Header />
        <div className='flex flex-wrap gap-5 items-center  place-content-center mt-10'>
          {
            (blogs.length == 0)? (
              <div className='flex flex-col gap-6 items-center h-screen w-full place-content-center'> 
                <span className='text-9xl'>😎</span> 
                <p className='text-3xl text-gray-600 font-medium'>Add you first post +</p>
              </div>
            )
            :blogs.map((item) => {
             return  <BlogCard data={item} key={item.id} blogs ={blogs} setBlogs = {setBlogs}/>
            })
          }
        </div>
        </div>
    </div>
  )
}

export default Home