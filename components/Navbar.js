import React from "react";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="menu-nar">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="About">
            <a>About</a>
          </Link>
          <Link href="/Conatct">
            <a>Conatct</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/Product">
            <a>Product</a>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
