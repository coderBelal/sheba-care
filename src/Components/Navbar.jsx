import { useState } from "react";
import logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md   z-10">
      <div className=" px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
 
        <div className="flex items-center">
          <img src={logo} alt="logo" className="w-[100px]" />
        </div>

         <nav className="  hidden md:flex gap-6 text-gray-800">
          <ul className="flex items-center gap-6">
            <Link to={"/"} >       <li className="hover:text-teal-700 cursor-pointer">Home</li> </Link>
     
 <Link  to={"/hospital"} >            <li className="hover:text-teal-700 cursor-pointer">Hospital</li></Link>
          <Link to={"/healthblog"} > <li className="hover:text-teal-700 cursor-pointer">Health Blogs</li></Link> 
           
            <Link to='/find-doctor' > <li className="hover:text-teal-700 cursor-pointer">Find A Doctor</li></Link>
            <Link to={"/about"}><li className="hover:text-teal-700 cursor-pointer">About Us</li></Link>
            
          </ul>
        </nav>

           <Link to='/create-account'  >  <div className="hidden md:block bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition duration-200">
          <button className="text-sm">Create An Account</button>
        </div></Link>
      

 
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
 
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-lg rounded-lg mx-4 mt-2">
          <ul className="flex flex-col items-start p-4 gap-3">
               <Link to={"/"} >       <li className="hover:text-teal-700 cursor-pointer">Home</li> </Link>
       <Link  to={"/hospital"} >            <li className="hover:text-teal-700 cursor-pointer">Hospital</li></Link>
         <Link to={"/healthblog"} > <li className="hover:text-teal-700 cursor-pointer">Health Blogs</li></Link> 
        <Link to='/find-doctor' > <li className="hover:text-teal-700 cursor-pointer">Find A Doctor</li></Link>
          <Link to={"/about"}><li className="hover:text-teal-700 cursor-pointer">About Us</li></Link>
            <li>
                         <Link to='/create-account'  >  <div className=" md:block bg-teal-700 text-white px-4 py-2 rounded-lg hover:bg-teal-800 transition duration-200">
          <button className="text-sm">Create An Account</button>
        </div></Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
