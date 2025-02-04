import React, { useEffect } from 'react'
import SideBar from '../components/SideBar';
import Header from '../components/Header';
import CreateForm from '../components/CreateForm';

const Create = () => {

    return (
        <div className='flex gap-1'>
            <SideBar />
            <div className='w-full'>
            <Header />
            <CreateForm />
            </div>
        </div>  
      )
};
export default Create