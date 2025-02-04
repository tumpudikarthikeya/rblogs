import React from "react";
import { GoHeart } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { BsFillTrash3Fill } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";
import { FaShare } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router";
import { sharePost } from "../utils/commonFunctions";

const BlogCard = ({ data,blogs,setBlogs}) => {


  
  

  function deletePost(postId){
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const updatedPOsts = posts.filter((p)=>p.id!=postId);
    localStorage.setItem("posts",JSON.stringify(updatedPOsts));
    setBlogs(updatedPOsts)
  }

  

  return (
    <div className="w-full flex bg-white mx-20 rounded-lg shadow-md ">
      <Link to={`/blog/${data.id}`} className="flex  flex-12  gap-5 ">
      <img src={data.imageUrl} alt="" className="rounded-l-lg w-110  object-cover" />
      <div className="flex items-center justify-between w-full">

      <div className="flex flex-col">
        <span className="text-2xl font-medium line-clamp-1 overflow-hidden text-ellipsis">{data.title}</span>
        <p className="text-gray-600 line-clamp-2 overflow-hidden text-ellipsis">
          {data.content}
        </p>

        <div className="flex items-center gap-8 mt-10 text-gray-600">
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <LuEye className=" text-2xl" />
            <p className="text-xl">{data.views}</p>
          </div>
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <GoHeart className=" text-2xl" />
            <p className="text-xl">{data.likes}</p>
          </div>
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <BiComment className=" text-2xl " />
            <p className="text-xl">{data.comments.length}</p>
          </div>
        </div>
      </div>
      </div>
    </Link>
<div className="flex flex-1 flex-col justify-center  gap-5 py-10 ml-10">
          <CiTrash className="text-4xl p-1 hover:bg-rose-500/[10%] text-rose-500 rounded-lg" 
        onClick={()=> deletePost(data.id)} />

        <Link to= {`/edit/${data.id}`}>
            <TbEdit className="text-4xl p-1 hover:bg-blue-500/[10%] text-blue-500 rounded-lg" />
        </Link>


          <BsShare className="text-4xl p-1 hover:bg-emerald-500/[10%] text-emerald-500 rounded-lg" 
          onClick={()=>sharePost(window.location.href + "/edit/" + data.id.toString())}/>


      </div>

    </div>

  );
};

export default BlogCard;


