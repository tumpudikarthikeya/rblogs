import React from "react";
import { FiSearch } from "react-icons/fi";
import { GrNotification } from "react-icons/gr";
import { useState,useEffect } from "react";
const Header = () => {

  const [name,setName] = useState(JSON.parse(localStorage.getItem("name")) || "");

  useEffect(() => {
    if (name === "") {
      const user = prompt("Enter your name");
      
      if (user) {
        localStorage.setItem("name", JSON.stringify(user));
        setName(user);
      }
    }
  },[name]); 

  return (
    
    <div className=" flex bg-white h-20 w-full items-center justify-between sticky top-0">
      {/* Greet */}
      <div className="flex items-center">
        {/* 👋 😊 😄 */}
        <div className="text-3xl mx-2">😄</div>
        <div>
          <span className="text-xl"> Hi {name}!</span>
          <p className="text-gray-600">
            Be better everyday to shape your knowledge
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="border-2 border-gray-200 rounded-lg flex items-center px-2 gap-2">
        <FiSearch className="text-xl text-gray-400" />
        <input type="text" className="py-1  w-150" placeholder="Search Blogs" />
      </div>

      {/* Notification and profile */}
      <div className="text-xl flex items-center gap-6 mr-6">
        <GrNotification />
        <div className="flex gap-2 items-center">
        <div className="border-l-2 border-gray-300 h-10 mr-2"></div>
        <img
            src="https://culturedvultures.com/wp-content/uploads/2022/11/image_2022-11-01_112512251.jpg"
            alt=""
            className="w-10 h-10 object-cover rounded-full"
          />
          <span className="text-lg">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
