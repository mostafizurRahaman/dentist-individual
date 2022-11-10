import { ErrorResponse } from "@remix-run/router";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import ErrorMessage from "../../Shared/ErrorMessage/ErrorMessage";
import "./Contact.css";

const ContactUs = () => {
   const { LogOut } = useContext(AuthContext);
   const navigate = useNavigate();
   const [contactInfo, setContactInfo] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   });

   const [error, setError] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
      general: "",
   });

   const handleFirstName = (e) => {
      const firstName = e.target.value;
      if (!firstName) {
         setError({ ...error, firstName: "must enter first name : " });
         setContactInfo({ contactInfo, firstName: "" });
         return;
      }
      setError({ ...error, firstName: "" });
      setContactInfo({ ...contactInfo, firstName });
   };

   const handleLastName = (e) => {
      const lastName = e.target.value;
      if (!lastName) {
         setError({ ...error, lastName: "must enter last name : " });
         setContactInfo({ ...contactInfo, lastName: "" });
         return;
      }
      setError({ ...error, lastName: "" });
      setContactInfo({ ...contactInfo, lastName });
   };

   const handleEmail = (e) => {
      const email = e.target.value;
      if (!email) {
         setError({ ...error, email: "must enter an email" });
         setContactInfo({ ...contactInfo, email: "" });
         return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
         setError({ ...error, email: "enter a valid email: " });
         setContactInfo({ ...contactInfo, email: "" });
         return;
      }
      setError({ ...error, email: "" });
      setContactInfo({ ...contactInfo, email });
   };

   const handlePhone = (e) => {
      const value = e.target.value;

      const phone = parseInt(value);
      if (isNaN(phone)) {
         setError({ ...error, phone: "please enter valid number" });
         setContactInfo({ ...contactInfo, phone: "" });
         return;
      }
      if (!/(^([+]{1}[8]{2}|0088)?(01){1}[3-9]{1}\d{8})$/.test(value)) {
         setError({ ...error, phone: "please enter valid number" });
         setContactInfo({ ...contactInfo, phone: "" });
         return;
      }

      setError({ ...error, phone: "" });
      setContactInfo({ ...contactInfo, phone });
   };

   const handleMessage = (e) => {
      const message = e.target.value;
      if (!message) {
         setError({ ...error, message: "must enter a message" });
         setContactInfo({ ...contactInfo, message: "" });
         return;
      }

      setError({ ...error, message: "" });
      setContactInfo({ ...contactInfo, message });
   };

   const handleSubmit = (e) => {
      setError({ ...error, general: "" });
      e.preventDefault();
      const { firstName, lastName, email, phone, message } = contactInfo;
      if (!firstName || !lastName || !email || !phone || !message) {
         setError({ ...error, general: "please fill the form" });
         return;
      }
      setError({ ...error, general: "" });

      fetch("https://mr-dentist-server.vercel.app/contacts", {
         method: "POST",
         headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("mr-dentist-token")}`,
         },
         body: JSON.stringify({ firstName, lastName, email, phone, message }),
      })
         .then((res) => {
            if (res.status === 401 || res.status === 403) {
               navigate("/login");
               return LogOut();
            }
            return res.json();
         })
         .then((data) => {
            if (data.acknowledged) {
               e.target.reset();
               Swal.fire(
                  "WOW!!!!!!",
                  "Your Message sent Successfully!",
                  "success"
               );
            }
         })
         .catch((err) => console.log(err));
   };

   return (
      <div className="flex  items-center justify-center p-12 flex-col gap-7 bg-blue-400 contact-form mt-10">
         <h2 className="text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3   before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 ">
            Contact With Us
         </h2>
         <form
            className="grid grid-cols-1 md:grid-cols-2 gap-10 w-4/5"
            onSubmit={handleSubmit}
         >
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="first-name">
                  {" "}
                  First Name:{" "}
               </label>
               <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  placeholder="first name : "
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-white bg-transparent placeholder:text-opacity-70"
                  required
                  onBlur={handleFirstName}
               />
               {error.firstName && (
                  <ErrorMessage>{error.firstName}</ErrorMessage>
               )}
            </div>
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="last-name">
                  last Name:{" "}
               </label>
               <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  placeholder="last name : "
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-white bg-transparent"
                  required
                  onBlur={handleLastName}
               />
               {error.lastName && <ErrorMessage>{error.lastName}</ErrorMessage>}
            </div>
            <div className="flex flex-col w-full  gap-4">
               <label className="text-xl font-bold" htmlFor="email">
                  email:
               </label>
               <input
                  type="email"
                  id="email"
                  placeholder="email"
                  name="email"
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-white  bg-transparent"
                  required
                  onBlur={handleEmail}
               />
               {error.email && <ErrorMessage>{error.email}</ErrorMessage>}
            </div>
            <div className="flex flex-col w-full gap-4">
               <label className="text-xl font-bold" htmlFor="phone">
                  Mobile Number :{" "}
               </label>
               <input
                  type="phone"
                  id="phone"
                  name="phone"
                  placeholder="phone"
                  className="border-2 rounded-lg w-full px-3 py-2 placeholder:text-xl placeholder:text-white bg-transparent "
                  required
                  onBlur={handlePhone}
               />
               {error.phone && <ErrorMessage>{error.phone}</ErrorMessage>}
            </div>
            <div className="flex flex-col w-full  gap-4 col-span-1 md:col-span-2">
               <label className="text-xl font-bold" htmlFor="message">
                  Message:{" "}
               </label>
               <textarea
                  placeholder="Enter your message"
                  name="message"
                  id="message"
                  cols="30"
                  rows="10"
                  className="border-2 rounded-lg w-full px-3 py-2 bg-transparent placeholder:text-xl placeholder:text-white"
                  required
                  onBlur={handleMessage}
               ></textarea>
               {error.message && <ErrorMessage>{error.message}</ErrorMessage>}
               {error.general && <ErrorMessage>{error.general}</ErrorMessage>}
               <div>
                  <button
                     type="submit"
                     className="text-xl text-white bg-orange-600 px-10 mt-5 py-3 block mx-auto  "
                  >
                     Send Message
                  </button>
               </div>
            </div>
         </form>
      </div>
   );
};

export default ContactUs;
