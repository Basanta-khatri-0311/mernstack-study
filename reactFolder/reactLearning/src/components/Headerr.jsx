import React from "react";
import { Link } from "react-router-dom";

const Headerr = () => {
  return (
    <>
      <nav className="py-7 px-10 flex justify-between items-center bg-emerald-700">
        <div className="text-4xl">
          <Link to='/'>BK</Link>
        </div>
        <div className="flex underline text-xl text-white gap-10">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
};

export default Headerr;
