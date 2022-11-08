import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";
import { FaSignOutAlt } from "react-icons/fa";
import "./Header.css";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
const Header = () => {
   const {user, LogOut} = useContext(AuthContext);  
   return (
      <div className="flex items-center justify-between px-12 text-white h-20 w-full relative top-0 left-0 bg-orange-600 ">
         <Link to='/' className="flex items-center justify-center gap-2">
            <img src={logo} alt="dentist" className="w-14 h-14 " />
            <h2 className="text-3xl font-bold uppercase">Mr. Dentist</h2>
         </Link>
         <div className="flex items-center gap-3 font-medium text-xl">
            <Link to="/home">Home</Link>
            <Link to="/services">Services</Link>

            {user?.uid ? (
               <>
                  <Link to="/my-reviews">MyReviews</Link>
                  <Link to="/add-services">Add Services</Link>
                  <Link>
                     <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full bg-white" />
                  </Link>
                  <FaSignOutAlt className="text-blue-400 text-2xl" onClick={()=> LogOut()}></FaSignOutAlt>
               </>
            ) : (
               <>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
               </>
            )}
         </div>
      </div>
   );
};

export default Header;
