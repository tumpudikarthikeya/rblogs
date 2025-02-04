import React from "react";
import { IoLogoSlack } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { Link } from "react-router";
import { useState } from "react";

const SideBar = () => {
 
  return (
    <div className="h-screen bg-white px-10 w-59">
      <div className="flex gap-2 items-center text-2xl font-semibold py-3">
        <IoLogoSlack />
        RBlog
      </div>
      <div className="flex flex-col gap-2">
        <Link to="/">
          <div className="flex items-center text-lg gap-2 bg-gray-200 px-2 py-1 rounded-lg">
            <GoHome />
            Home
          </div>
        </Link>
        <Link to="/create">
          <div className="flex items-center text-lg gap-2 bg-gray-200 px-2 py-1 rounded-lg">
            <FaPlus />
            Create
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
