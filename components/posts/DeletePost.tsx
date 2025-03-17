"use client";

import { deletePost } from "@/actions/postServerActions";
import { Post } from "@prisma/client";
import { useState } from "react";
import { ImSpinner } from "react-icons/im";
import { MdDelete } from "react-icons/md";

const DeletePost = ({ post }: { post: Post }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (post: Post) => {
    setLoading(true);
    await deletePost(post);
    setLoading(false);
  };
  return (
    <button onClick={() => handleDelete(post)}>
      {!loading && <MdDelete size={20} />}
      {loading && <ImSpinner size={20} className="animate-spin" />}
    </button>
  );
};

export default DeletePost;
