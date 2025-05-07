"use server";

import prismadb from "@/lib/prismadb";
import { PostSchema, PostSchemaType } from "@/schemas/PostSchema";
import { Post } from "@prisma/client";
import { revalidatePath } from "next/cache";

// Server action to create a new post
// This function can be called directly from client components
export const createPost = async (values: PostSchemaType) => {
  // Validate the input data using Zod schema
  const validatedFields = PostSchema.safeParse(values);

  // Return error if validation fails
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  // Extract validated title from the data
  const { title } = validatedFields.data;

  try {
    // Create new post in the database using Prisma
    await prismadb.post.create({
      data: {
        title,
      },
    });

    // Revalidate the home page to show the new post
    // This triggers a re-render of the page with fresh data
    revalidatePath("/");
    return { success: "Post created" };
  } catch (error) {
    return { error: "Server error!" };
  }
};

// Server action to fetch all posts
// Used in the ListPosts component to display posts
export const getPosts = async () => {
  try {
    // Fetch all posts from database, ordered by creation date (newest first)
    const posts = await prismadb.post.findMany({
      orderBy: {
        postedAt: "desc",
      },
    });
    return { success: posts };
  } catch (error) {
    return { error: "server error!" };
  }
};

// Server action to delete a post
// Called when user clicks delete button
export const deletePost = async (post: Post) => {
  try {
    // Delete the post from database using its ID
    await prismadb.post.delete({
      where: {
        id: post.id,
      },
    });
    // Revalidate the home page to update the UI
    revalidatePath("/");
    return { success: "Post deleted" };
  } catch (error) {
    return { error: "Server error" };
  }
};

// Server action to edit a post
// Called when user submits the edit form
export const editPost = async (post: Post, title: string) => {
  try {
    // Update the post in database with new title
    await prismadb.post.update({
      where: {
        id: post.id,
      },
      data: { title },
    });

    // Revalidate the home page to update the UI
    revalidatePath("/");
    return { success: "post edited" };
  } catch (error) {
    return { error: "server error" };
  }
};
