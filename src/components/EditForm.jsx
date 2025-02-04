import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";

const EditForm = () => {
const { id } = useParams(); 
const navigate = useNavigate();
  const posts = JSON.parse(localStorage.getItem("posts")) || [];
//   console.log(posts);
  
  const data = posts.find((p)=>p.id==id );
  console.log(posts[data]);
  
  const [title, setTitle] = useState(data.title);
  const [imageUrl, setImageUrl] = useState(data.imageUrl);
  const [content, setContent] = useState(data.content);
//   console.log(posts,id,data);
  


  const handleSubmit = (e) => {
    // e.preventDefault();

    // Creating a post object
    const editedPost = {
      id: data.id, // Unique ID
      title,
      imageUrl,
      content,
      date: new Date().toLocaleString(), // Current date and time
      views: data.views,
      likes: data.likes,
      comments: data.comments,
    };

    // Get existing posts from localStorage or initialize an empty array
    const updatedPosts = posts.filter((p)=>p.id!=id);

    // Add new post to the list
    updatedPosts.unshift(editedPost);

    // Save updated list back to localStorage
    localStorage.setItem("posts", JSON.stringify(updatedPosts));

    // Reset form fields
    setTitle("");
    setImageUrl("");
    setContent("");

    alert("Post Updated Successfully!");

    navigate("/")

  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 w-full max-w-lg rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="border border-gray-300 p-2 rounded"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Image URL</label>
            <input
              type="text"
              placeholder="Paste Image URL"
              className="border border-gray-300 p-2 rounded"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="text-lg mb-2">Content</label>
            <textarea
              placeholder="Enter Content"
              className="min-h-[100px] border border-gray-300 p-2 rounded"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 shadow-lg shadow-blue-500/50 text-white p-2 rounded"
          >
            Create Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
