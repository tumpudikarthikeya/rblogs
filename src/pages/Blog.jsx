import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import SideBar from '../components/SideBar';
import InfoCard from '../components/InfoCard';


const Blog = () => {
    const {id} = useParams();
    const data = JSON.parse(localStorage.getItem("posts")) || [];
    const post = data.find((p)=>p.id ==id)


    
  return (
    <div className='flex'>
        <SideBar />
        <div className='flex w-full'>
        <div className='flex flex-8 flex-col w-6xl h-screen overflow-auto items-center  bg-white rounded-lg p-7 m-3 '>
            <img src={post.imageUrl} alt="" className='w-full h-[500px] rounded-lg object-cover'/>
            <span className='text-5xl font-bold my-3'>{post.title}</span>
            <p className='text-gray-600 text-lg mt-6'>{post.content}</p>
        </div>
        <InfoCard id={id} />
        </div>
    </div>
  )
}

export default Blog