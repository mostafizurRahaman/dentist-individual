import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";
import ShowRoute from "../Shared/ShowRoute/ShowRoute";

const ReviewEdit = () => {
   const {LogOut} = useContext(AuthContext); 
   const navigate = useNavigate(); 
   const review = useLoaderData();
   const {
      _id,
      service_id,
      email,
      service_name,
      ratings,
      message,
      reviewer,
      profile,
   } = review;
   const [error, setError] = useState({
      messageOne: "",
      ratingsNew: "",
      general: "",
   });
   const [ReviewInfo, setReviewInfo] = useState({
      messageOne: "",
      ratingsNew: "",
   });

   const handleMessage = (e) => {
      const messageOne = e.target.value;
      if (!messageOne) {
         setError({ ...error, messageOne: "please  enter your message" });
         setReviewInfo({ ...ReviewInfo, messageOne: "" });
         return;
      }
      if (messageOne.length < 35) {
         setError({ ...error, messageOne: "please write 35 character" });
         setReviewInfo({ ...ReviewInfo, messageOne: "" });
         return;
      }

      setError({ ...error, messageOne: "" });
      setReviewInfo({ ...ReviewInfo, messageOne });
   };

   const handleRatings = (e) => {
      const value = e.target.value;
      if (!value) {
         setError({ ...error, ratingsNew: "please enter a ratings" });
         setReviewInfo({ ...ReviewInfo, ratingsNew: "" });
         return;
      }
      const ratingsNew = parseInt(e.target.value);
      if (isNaN(ratingsNew)) {
         setError({ ...error, ratingsNew: "ratings must be number" });
         setReviewInfo({ ...ReviewInfo, ratingsNew: "" });
         return;
      }
      if (ratings < 0 || ratingsNew > 5) {
         setError({ ...error, ratingsNew: "ratings must be between 0 to 5" });
         setReviewInfo({ ...ReviewInfo, ratingsNew: "" });
         return;
      }
      setError({ ...error, ratingsNew: "" });
      setReviewInfo({ ...ReviewInfo, ratingsNew });
   };
   const handleSubmit = (e) => {
      e.preventDefault();
      setError({ ...error, general: "" });
      const { messageOne, ratingsNew } = ReviewInfo;

      if (!messageOne || !ratingsNew) {
         setError({ ...error, general: "Please the form correctly" });
         return;
      }
      setError({ ...error, general: "" });
      console.log({
         messageOne,
         profile,
         ratingsNew,
         email,
         service_name,
         service_id,
      });

      fetch(`http://localhost:5000/reviews/${_id}`, {
         method: "PUT",
         headers: {
            "Content-Type": "application/json",
            "authorization" : `Bearer ${localStorage.getItem('mr-dentist-token')}`
         },
         body: JSON.stringify({ messageOne, ratingsNew }),
      })
         .then((res) => {
            if(res.status === 401 || res.status === 403){ 
               return LogOut()
            }
            return res.json();
         })
         .then((data) => {
            console.log(data);
            if (data.modifiedCount > 0) {
               e.target.reset();
               Swal.fire(
                  'WOW!',
                  'Updated Successfully!',
                  'success'
                ); 
            }
         })
         .catch((err) => {
            console.log(err);
         });
   };
   useTitle('Update Review')
   return (
      <div>
         <ShowRoute first="My Reviews" second="Update Form"></ShowRoute>
         <div className="flex items-center flex-col">
            <h2 className="text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-16  mt-10 ">
               Update Review
            </h2>
            <h4 className="text-red-500 text-4xl  mb-3 ">
               You Can edit only Ratings and Text{" "}
            </h4>
            <form
               onSubmit={handleSubmit}
               className="p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300  gap-5 flex flex-col"
               style={{
                  boxShadow:
                     "6px 6px 6px inset rgba(0, 0, 255, 0.3, -6px -6px 6px inset rgba(0, 0, 255, 0.3))",
               }}
            >
               <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                     <div className="flex flex-col w-full">
                        <label className="text-xl mb-2" htmlFor="name">
                           Name :
                        </label>
                        <input
                           className="w-full p-2  border-2 inputBox rounded-xl"
                           type="text"
                           name="name"
                           placeholder="name"
                           id="name"
                           defaultValue={reviewer}
                           readOnly
                        />
                     </div>
                     <div className="flex flex-col w-full">
                        <label className="text-xl mb-2" htmlFor="image">
                           Image :{" "}
                        </label>
                        <input
                           className="w-full p-2  border-2 inputBox rounded-xl"
                           type="text"
                           name="image"
                           placeholder="image"
                           id="image"
                           defaultValue={profile}
                           readOnly
                        />
                     </div>

                     <div className="flex flex-col w-full">
                        <label className="text-xl mb-2" htmlFor="email">
                           
                           Email :
                        </label>
                        <input
                           className="w-full p-2  border-2 inputBox rounded-xl"
                           type="email"
                           id="email"
                           defaultValue={email}
                           required
                           readOnly
                        />
                     </div>
                     <div className="flex flex-col w-full">
                        <label className="text-xl mb-2" htmlFor="service_id">
                           service Id :
                        </label>
                        <input
                           className="w-full p-2  border-2 inputBox rounded-xl"
                           type="text"
                           name="service_id"
                           placeholder="service_id"
                           id="service_id"
                           defaultValue={service_id}
                           readOnly
                           required
                        />
                     </div>
                     <div className="flex flex-col w-full">
                        <label className="text-xl mb-2" htmlFor="ratings">
                           Ratings :
                        </label>
                        <input
                           className="w-full p-2  border-2 inputBox rounded-xl"
                           onBlur={handleRatings}
                           type="text"
                           name="ratings"
                           placeholder="0 to 5"
                           id="ratings"
                           required
                           defaultValue={ratings}
                        />
                        {error?.ratingsNew && (
                           <ErrorMessage>{error?.ratingsNew}</ErrorMessage>
                        )}
                     </div>
                  </div>
                  <div className="flex flex-col w-full">
                     <label className="text-xl mb-2" htmlFor="message">
                        Message
                     </label>
                     <textarea
                        name="review"
                        className="w-full p-2  border-2 inputBox rounded-xl"
                        id=""
                        cols="30"
                        rows="14"
                        defaultValue={message}
                        onBlur={handleMessage}
                        required
                     ></textarea>
                     {error?.messageOne && (
                        <ErrorMessage>{error.messageOne}</ErrorMessage>
                     )}
                  </div>
               </div>
               <div>
                  {error?.general && (
                     <ErrorMessage>{error?.general}</ErrorMessage>
                  )}
                  <button className="block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto submitButton hover:bg-black ">
                     Submit review
                  </button>
               </div>
            </form>
         </div>
      </div>
   );
};

export default ReviewEdit;
