import React, { useEffect, useState } from "react";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { LuEye } from "react-icons/lu";
import { BsShare } from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { LuSendHorizontal } from "react-icons/lu";
import { sharePost } from "../utils/commonFunctions";

const InfoCard = ({ id }) => {
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
  
  const data = posts.find((p)=>p.id==id );
  

  const [likes, setLikes] = useState(data.likes|| 0);
  const [comments, setComments] = useState(data.comments || []);
  const [userComment,setUserComment] = useState("");

  useEffect(()=>{
    data.views+=1
    const restBlogs = posts.filter((p)=>p.id!=id)
    restBlogs.unshift(data)
    localStorage.setItem("posts",JSON.stringify(restBlogs))
  },[])

  function handleLikes() {
    const restBlogs = posts.filter((p)=>p.id!=id)
    data.likes =likes+1
    setLikes(likes+1)
    restBlogs.unshift(data)
    localStorage.setItem("posts",JSON.stringify(restBlogs))

  }

  function handleComment(){
    const restBlogs = posts.filter((p)=>p.id!=id)
    data.comments.unshift(userComment);
    setComments([userComment,...comments])
    
    restBlogs.unshift(data)
    localStorage.setItem("posts",JSON.stringify(restBlogs))
  }


  console.log(id);

  return (
    <div className="flex-3  h-full bg-white rounded-lg p-7 m-3">

      <div className="flex items-center justify-around text-gray-600 mb-8">
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <LuEye className=" text-2xl" />
            <p className="text-xl">{data.views}</p>
          </div>
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <GoHeart className=" text-2xl" onClick={()=> handleLikes()} />
            <p className="text-xl">{likes}</p>
          </div>
          <div className="flex items-center gap-2  p-1 rounded-lg">
            <BiComment className=" text-2xl " />
            <p className="text-xl">{comments.length}</p>
          </div>
        </div>
        <div className="flex w-full p-1 gap-2 justify-center mb-8 items-center bg-emerald-500/[10%] text-emerald-500 rounded-lg"
                  onClick={()=>sharePost(window.location.href)}>
        <BsShare className="text-2xl " />
          <p className="text-lg">Share</p>
        </div>
      <hr className="text-gray-300" />
      <div className="flex flex-col">
        <span className="text-lg font-medium">Comments</span>
        <div className="flex gap-2 mt-2">
          <input
            type="text"
            className="flex-6 rounded-lg border-1 border-gray-300 py-1 px-2"
            placeholder="Write a comment..."
            value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
              required
          />
          <div className="bg-black text-xl p-2 text-white rounded-md"
          onClick={()=> handleComment()}>
            <LuSendHorizontal />
          </div>
        </div>
        {
          comments.length!=0 && comments.map((item,index)=>{
            return (<div className="bg-gray-100 my-4 px-2 py-5 rounded-lg" key={index}>
                <p className="">{item}</p>
              </div>)
          })
        }
      </div>
    </div>
  );
};

export default InfoCard;
