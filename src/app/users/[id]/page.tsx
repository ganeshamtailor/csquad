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
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserData {
  name: string;
  avatar: string;
  about: string;
}

const UserPage = () => {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [user, setUser] = useState<UserData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `https://64cb8f7f700d50e3c7061cf4.mockapi.io/api/users/${id}`
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [id]);
  console.log(id);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-auto mx-6 mt-6">
      <Card>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
          <CardDescription>{user.name}</CardDescription>
        </CardHeader>
        <CardContent>
          <Avatar>
            <AvatarImage src={user.avatar} alt="@shadcn" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
          <div className="mt-4">
            <p className="text-sm font-medium">About:</p>
            <p className="text-sm ">{user.about}</p>
          </div>
        </CardContent>
      </Card>
      <Button variant={"outline"} asChild className="mt-6">
        <Link href="/users">Back</Link>
      </Button>
    </div>
  );
};

export default UserPage;
