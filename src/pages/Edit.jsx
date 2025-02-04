import React, { useEffect } from 'react'
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import EditForm from '../components/EditForm';

const Edit = () => {
  return (
    <div className='flex gap-1'>
        <SideBar />
        <div className='w-full'>
        <Header />
        <EditForm />
        </div>
    </div>  
  )
}

export default Edit