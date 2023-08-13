import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 flex flex-horitzontal m-5">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl hover:cursor-default">BlockIP</a>
      </div>
      <div className="flex-none">
        <ul className="flex flex-horizontal px-1">
          <li className="mr-5 hover:text-blue-500">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-5 hover:text-blue-500">
            <Link href="/minter">Minter</Link>
          </li>
          <li className="mr-5 hover:text-blue-500">
            <Link href="/factory">Factory</Link>
          </li>
          <li className="mr-1 hover:text-blue-500">
            <Link href="/explore">Explore</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
