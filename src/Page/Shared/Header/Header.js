import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";
import "./Header.css";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const Header = () => {
   const { user, LogOut } = useContext(AuthContext);
   const [display, setDisplay] = useState(false);
   return (
      <div className="flex  items-center justify-between px-12 text-white h-20 w-full relative top-0 left-0 bg-orange-600 ">
         <Link to="/" className="flex items-center justify-center gap-2">
            <img src={logo} alt="dentist" className="w-14 h-14 " />
            <h2 className="text-3xl font-bold uppercase">Mr. Dentist</h2>
         </Link>
         <div className={`flex absolute flex-col  md:static md:flex-row items-center gap-5 font-medium text-xl  py-5 md:py-0 w-full h-screen md:w-auto top-20 transition-all md:transition-none duration-1000  bg-gray-800 md:bg-transparent md:bg-opacity-100 z-30 bg-opacity-80  ${display ? 'left-0' : 'goleft' }`}>
            <Link to="/home" onClick={()=> setDisplay(!display)}>Home</Link>
            <Link to="/services" onClick={()=> setDisplay(!display)}>Services</Link>
            <Link to="/blog" onClick={()=> setDisplay(!display)}>Blog</Link>

            {user?.uid ? (
               <>
                  <Link to="/my-reviews" onClick={()=> setDisplay(!display)}>MyReviews</Link>
                  <Link to="/add-services" onClick={()=> setDisplay(!display)}>Add Services</Link>
                  <Link>
                     <img
                        src={user?.photoURL}
                        alt=""
                        className="w-12 h-12 rounded-full bg-white"
                        onClick={()=> setDisplay(!display)}
                     />
                  </Link>
                  <FaSignOutAlt 
                     className=  "text-white md:text-blue-400 text-4xl "
                     onClick={() => {
                        LogOut()
                        setDisplay(!display);
                     
                     }}
                  ></FaSignOutAlt>
               </>
            ) : (
               <>
                  <Link to="/login" onClick={()=> setDisplay(!display)}>Login</Link>
                  <Link to="/register" onClick={()=> setDisplay(!display)}>Register</Link>
               </>
            )}
         </div>
         <div className="text-3xl block md:hidden" onClick={()=> setDisplay(!display)}>
            {display ? 
               <RiCloseCircleLine></RiCloseCircleLine>
             : 
               <FaBars></FaBars>
         }
         </div>
      </div>
   );
};

export default Header;
