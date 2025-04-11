'use client';
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const [searchText, setSearchText] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search text:", searchText);
    if (searchText) {
      console.log("Navigating to:", `/movies/search?query=${searchText}`);
      router.push(`/movies/search?query=${searchText}`);

    }
  };

  return (
    <div>
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b h-20">
        <div className="flex justify-between container-fluid mx-auto px-4 h-full items-center">
          <div className=" flex space-x-6 text-2xl ">
          <Link href="/" className="text-white btn btn-outline-success">Allepy</Link>
          <a href="/upcoming" className="text-white  btn btn-outline-success">Upcoming</a>
          </div>
          <form  role="search" onSubmit={e => handleSubmit(e)} className="flex">
            <input onChange={(e) => setSearchText(e.target.value)} className="rounded text-white px-2 me-2 border hover:bg-white/20 transition ease-in-out hover:cursor-pointer" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success text-white" type="submit">Search</button>
            
          </form>
        </div>
      </nav>
    </div>
  );
}
export default Header;

<div className="">
  <Link href="/">Allepy</Link>
</div>