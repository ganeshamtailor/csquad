import Link from "next/link";

interface Post {
  id: number;
  title: string;
  description: string;
}

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="p-4 border border-gray-300 rounded-lg shadow-md">
      <Link href={`/posts/${post.id}`}>
        <p className="text-slate-900 text-md font-semibold hover:underline">Topic: {post.title}</p>
      </Link>
      <div className="mt-2">
        <p className="text-slate-600 text-sm">Description:<br/>{post.description}</p>
      </div>
    </div>
  );
};

export default PostCard;
