'use client';

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
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
      <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">Allepy</Link>
          <a href="/upcoming" className="navbar-brand">Upcoming</a>
          <form className="d-flex" role="search" onSubmit={e => handleSubmit(e)}>
            <input onChange={(e) => setSearchText(e.target.value)} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <SignedOut >
              <SignInButton className="btn btn-outline-success"/>
              <SignUpButton className="btn btn-outline-success"/>
            </SignedOut>
            <SignedIn >
              <UserButton className="btn btn-outline-success"/>
            </SignedIn>
        </div>
      </nav>
    </div>
  );
}

export default Header;