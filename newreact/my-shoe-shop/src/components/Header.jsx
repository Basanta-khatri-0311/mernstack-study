import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenueOpen, setIsMenueOpen] = useState(false);

  const toggleHamburger = () => {
    setIsMenueOpen(!isMenueOpen);
  };

  return (
    <>
      <nav className="w-full bg-emerald-700 flex justify-between items-center p-6">
        <div className="text-4xl"><Link to="/">My-Logo</Link></div>

        <div className=" hidden md:flex  text-2xl space-x-12 font-[Poppins] ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">
            <i className="ri-shopping-bag-line"></i>
          </Link>
        </div>

        <div className="flex space-x-7 md:hidden">
          <Link to="/cart">
            <i className="ri-shopping-bag-line text-4xl"></i>
          </Link>
          <button onClick={toggleHamburger}>
            {isMenueOpen ? (
              <i className="ri-close-line text-4xl"></i>
            ) : (
              <i className="ri-menu-3-line text-4xl"></i>
            )}
          </button>
        </div>

        <div className={`absolute right-0 top-16 w-1/3 p-4 bg-slate-600 flex flex-col items-start justify-center text-2xl space-y-4 transform transition-transform duration-500 ${
          isMenueOpen ? "translate-x-0" : "translate-x-full"
          }`}>
          <Link to="/" onClick={toggleHamburger}>Home</Link>
          <Link to="/about" onClick={toggleHamburger}>About</Link>
          <Link to="/contact" onClick={toggleHamburger}>Contact</Link>
        </div>

      </nav>
    </>
  );
};

export default Header;
