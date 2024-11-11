import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menue, setMenue] = useState(false);
  const toggleHamburger = () => {};
  return (
    <>
      <nav className="bg-emerald-700 flex justify-between items-center p-6">
        <div className="text-4xl">My-Logo</div>

        <div className=" hidden md:flex underline text-2xl space-x-12">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <i className="ri-shopping-bag-line"></i>
          </Link>
        </div>

        <div className="flex space-x-7">
          <Link to="/cart">
            <i className="ri-shopping-bag-line text-4xl"></i>
          </Link>
          <button >
            {}
            <i className="ri-menu-3-line text-4xl"></i>
          </button>
        </div>

        <div className="bg-slate-500 w-1/2 absolute right-0 top-16 p-4 flex flex-col justify-start items-center text-2xl">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Header;
