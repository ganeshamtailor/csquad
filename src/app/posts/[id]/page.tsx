"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import axios from "axios";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface PostData {
    title: string;
    description: string;
    cover: string;
    createdAt: string;
  }

const PostPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [post, setpost] = useState<PostData | null>(null);
  


  useEffect(() => {
    if (id) {
      const fetchpost = async () => {
        try {
          const response = await axios.get(
            `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/posts/${id}`
          );
          setpost(response.data);
        } catch (error) {
          console.error("Error fetching post data:", error);
        }
      };

      fetchpost();
    }
  }, [id]);
  console.log(id);

  if (!post) {
    return <div>Loading...</div>;
  }
  const formattedDate = new Date(post.createdAt).toLocaleString();
  return (
    <div className="w-auto mx-6 mt-6">
      <Card>
        <CardHeader>
          
          <Avatar>
            <AvatarImage src={post.cover} alt="@shadcn" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardContent>
        <CardTitle>Title: {post.title}</CardTitle>
          <div className="mt-4">
            <p className="text-sm font-medium">Description:</p>
            <p className="text-sm ">{post.description}</p>
          </div>
        </CardContent>
        <CardFooter>
          <p className="text-sm">Created At: {formattedDate}</p>
        </CardFooter>
      </Card>
      <Button variant={"outline"} asChild className="mt-6">
        <Link href="/posts">Back</Link>
      </Button>
    </div>
  );
};

export default PostPage;
