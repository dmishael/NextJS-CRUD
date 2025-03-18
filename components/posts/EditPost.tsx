"use client";

import { MdClose, MdEdit } from "react-icons/md";
import PostForm from "./PostForm";
import { useState } from "react";
import { Post } from "@prisma/client";

const EditPost = ({ post }: { post: Post }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleCloseEditing = () => {
    setIsEditing(false);
  };

  const handleOpenEditing = () => {
    setIsEditing(true);
  };

  return (
    <>
      {!isEditing && (
        <button
          className="cursor-pointer text-slate-500"
          onClick={handleOpenEditing}
        >
          <MdEdit size={20} />
        </button>
      )}
      {isEditing && (
        <div className="absolute top-0 left-0 w-screen h-screen z-2 bg-slate-500/70 flex items-center justify-center">
          <div className="relative bg-white rounded-md p-8 w-full max-w-[600px]">
            <button className="absolute top-3 right-3 text-straight-500">
              <MdClose size={28} onClick={handleCloseEditing} />
            </button>
            <PostForm post={post} handleCloseEditing={handleCloseEditing} />
          </div>
        </div>
      )}
    </>
  );
};

export default EditPost;
