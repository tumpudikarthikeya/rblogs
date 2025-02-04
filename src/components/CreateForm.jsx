import React, { useState } from "react";

const CreateForm = () => {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Creating a post object
    const newPost = {
      id: Date.now(), // Unique ID
      title,
      imageUrl,
      content,
      date: new Date().toLocaleString(), // Current date and time
      views: 0,
      likes: 0,
      comments: [],
    };

    // Get existing posts from localStorage or initialize an empty array
    const existingPosts = JSON.parse(localStorage.getItem("posts")) || [];

    // Add new post to the list
    existingPosts.unshift(newPost);

    // Save updated list back to localStorage
    localStorage.setItem("posts", JSON.stringify(existingPosts));

    // Reset form fields
    setTitle("");
    setImageUrl("");
    setContent("");

    alert("Post Created Successfully!");
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

export default CreateForm;
