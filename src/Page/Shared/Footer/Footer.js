import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../Assets/Logo.png";

const Footer = () => {
   return (
      <div className="flex flex-col bg-gray-700 py-10 text-orange-600">
         <div className="  flex flex-col-reverse md:flex-row-reverse gap-6 px-5 items-center justify-center border-b-2 border-white">
            <div className="flex flex-col   text-center text-xl text-white w-full md:w-2/5 ">
               <h2 className='text-3xl border-b-2 border-orange-500 pb-3 text-orange-500 before:w-1/2 before:h-1 text-center my-5  mt-10 '>Our pages </h2>
               <Link className="hover:text-orange-500 block duration-1000 border-b-2 py-3 border-white" to="/home">Home</Link>
               <Link className="hover:text-orange-500 block duration-1000 border-b-2 py-3 border-white" to="/home">services</Link>
               <Link className="hover:text-orange-500 block duration-1000 border-b-2 py-3 border-white" to="/myreivews">My Reviews</Link>
               <Link className="hover:text-orange-500 block duration-1000  py-3" to="/">Add Service</Link>
            </div>
            <div className="text-white  w-full md:w-2/5">
               <h2 className='text-3xl border-b-2 border-orange-500 pb-3 text-orange-500 before:w-1/2 before:h-1 text-center my-5  mt-10 '>Contact with Social Media:</h2>
               <div className="flex items-center justify-center  gap-4 text-xl  hover:text-orange-500 duration-1000 border-b-2 border-white py-3">
                  <FaFacebook></FaFacebook> <p>Facebook</p>
               </div>
               <div className=" justify-center flex items-center gap-4 text-xl  hover:text-orange-500 duration-1000 border-b-2 border-white py-3">
                  <FaTwitter></FaTwitter> <p>Twitter</p>
               </div>
               <div className="justify-center flex items-center gap-4 text-xl  hover:text-orange-500 duration-1000 border-b-2 border-white py-3">
                  <FaInstagram></FaInstagram> <p>Instagram</p>
               </div>
               <div className="justify-center flex items-center gap-4 text-xl    hover:text-orange-500 duration-1000  py-3 ">
                  <FaLinkedin></FaLinkedin> <p>Linkedin</p>
               </div>
            </div>
            <div className=" w-1/5 flex items-center justify-center flex-col">
               <div className="w-20 h-20 rounded-full bg-white flex flex-col items-center justify-center">
                  <img
                     src={logo}
                     alt="mr-dentist-logo"
                     className=" w-20 h-20  "
                  />
               </div>
               <h3 className="mt-2 text-2xl">Mr.dentist</h3>
            </div>
         </div>
         <div className="flex items-center justify-center pt-10 text-xl capitalize text-white">
            <p>All &copy;Rights Reserved By Mr. Dentist</p>
         </div>
      </div>
   );
};

export default Footer;
