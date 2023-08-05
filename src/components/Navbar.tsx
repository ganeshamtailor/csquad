import Link from "next/link";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit bg-zinc-100 border-b border-zinc-300 z-[10] py-2">
      <div className="mx-6 h-full flex items-center justify-between">
        <div className="flex gap-10 items-center">
          <Link href="/">
            <p className="text-zinc-700 text-2xl font-bold">Couple Squad</p>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <Link
              href="/users"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Users
            </Link>
            <Link
              href="/posts"
              className="text-sm font-medium  transition-colors hover:text-primary"
            >
              Posts
            </Link>
          </nav>
        </div>
        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default Navbar;
