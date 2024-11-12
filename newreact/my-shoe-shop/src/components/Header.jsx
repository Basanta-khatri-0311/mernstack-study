import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserData } from "../context/UserContext";

const Header = () => { 
  const username = useContext(UserData)

  return(
    <h1>Header for {username.name}</h1>
  )
  
  // const [isMenueOpen, setIsMenueOpen] = useState(false);

  // const toggleHamburger = () => {
  //   setIsMenueOpen(!isMenueOpen);
  // };

  // return (
  //   <>
  //     <nav className="w-full bg-orange-400 flex justify-between items-center p-6">
  //       <div className="text-3xl  P-2"><Link to="/">My</Link></div>
        
  //       <div className=" hidden md:flex  text-2xl space-x-12 font-[Poppins] ">
  //         <Link to="/">Home</Link>
  //         <Link to="/about">About</Link>
  //         <Link to="/contact">Contact</Link>
  //         <Link to="/cart">
  //           <i className="ri-shopping-bag-line"></i>
  //         </Link>
  //       </div>

  //       <div className="flex space-x-7 md:hidden">
  //         <Link to="/cart">
  //           <i className="ri-shopping-bag-line text-4xl"></i>
  //         </Link>
  //         <button onClick={toggleHamburger}>
  //           {isMenueOpen ? (
  //             <i className="ri-close-line text-4xl"></i>
  //           ) : (
  //             <i className="ri-menu-3-line text-4xl"></i>
  //           )}
  //         </button>
  //       </div>

  //       <div className={`absolute right-0 top-16 w-1/3 p-4 bg-slate-600 flex flex-col items-start justify-center text-2xl space-y-4 transform transition-transform duration-500 ${
  //         isMenueOpen ? "translate-x-0" : "translate-x-full"
  //         }`}>
  //         <Link to="/" onClick={toggleHamburger}>Home</Link>
  //         <Link to="/about" onClick={toggleHamburger}>About</Link>
  //         <Link to="/contact" onClick={toggleHamburger}>Contact</Link>
  //       </div>

  //     </nav>
  //   </>
  // );
};

export default Header;
