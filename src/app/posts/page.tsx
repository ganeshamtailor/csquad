"use client";
import { useEffect, useState } from "react";
import PostCard from "../../components/PostCard";
import NewPostForm from "../../components/NewPostForm";
import axios from "axios";
interface NewPost {
    title: string;
    description: string;
  }
interface Post {
  id: number;
  title: string;
  description: string;
}

const PostsPage = () => {
  const [posts, setPosts] = useState<Post[]>([]); 

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts"
        );
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleCreatePost = async (newPost: NewPost) => {
    try {
      const response = await axios.post(
        "https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts",
        newPost
      );
      setPosts((prevPosts) => [...prevPosts, response.data]);
    } catch (error) {
      console.error("Error creating a new post:", error);
    }
  };

  return (
    <div className="w-auto mx-6 mt-6">
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
        <NewPostForm onCreatePost={handleCreatePost} />
      </div>
    </div>
  );
};

export default PostsPage;
