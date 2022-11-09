import { ErrorResponse } from "@remix-run/router";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import ErrorMessage from "../Shared/ErrorMessage/ErrorMessage";


const ReviewForm = ({singleService}) => {
   const {user} = useContext(AuthContext); 
   const {service, _id} = singleService; 
   console.log(service, _id); 
   const  [ReviewInfo , setReviewInfo] = useState({
      email: user?.email, 
      reviewer: user?.displayName, 
      profile: user?.photoURL, 
      ratings: '', 
      message: '',
      service_name: service, 
      service_id: _id,
   }); 

   const [error, setError] = useState({
      ratings: '',
      message: '',
      general:''
   })

   const handleRatings = (e) => {
      const value = e.target.value; 
      if(!value){
         setError({...error, ratings: 'please enter a ratings'})
         setReviewInfo({...ReviewInfo, ratings: ''}); 
         return ;
      }
      const ratings = parseInt(e.target.value); 
      if(isNaN(ratings)){
         setError({...error, ratings: "ratings must be number"})
         setReviewInfo({...ReviewInfo, ratings: ''}); 
         return; 
      } 
      if(ratings<0 ||  ratings>5){
         setError({...error, ratings: 'ratings must be between 0 to 5'}); 
         setReviewInfo({...ReviewInfo, ratings:''}); 
         return; 
      }
     setError({...error, ratings: ''}); 
     setReviewInfo({...ReviewInfo, ratings}); 
}

const handleMessage = (e) =>{
   const message = e.target.value; 
   if(!message){
      setError({...error, message: 'please  enter your message'}); 
      setReviewInfo({...ReviewInfo, message: ''}); 
      return; 
   }

   setError({...error, message: ''}); 
   setReviewInfo({...ReviewInfo, message}); 
}


const handleSubmit = (e) => {
   setError({...error, general: ""}); 
   e.preventDefault(); 
   const {email , reviewer, profile, ratings, message, service_name, service_id} = ReviewInfo; 
   if(!email || !reviewer || !profile || !ratings || !message || !service_name || !service_id ){
      setError({...error, general: 'Please the form correctly'}); 
      return ; 
   }
   setError({...error, general: ""}); 
   console.log({email , reviewer, profile, ratings, message, service_name, service_id}); 
   fetch('http://localhost:5000/ratings', {
      method: 'POST', 
      headers: {
         "content-type": 'application/json', 
      }, 
      body: JSON.stringify({email , reviewer, profile, ratings, message, service_name, service_id})
   })
   .then(res => res.json())
   .then(data => {
      console.log(data); 
   })
   .catch(err => {
      setError({...err, general: err.message}); 
   })
}

   return (
      <div className='flex items-center flex-col'>
          <h2 className='text-3xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 '>Add A Review</h2>
         <form className='p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300  gap-5 flex flex-col' onSubmit={handleSubmit} style={{ boxShadow: "6px 6px 6px inset rgba(0, 0, 255, 0.3, -6px -6px 6px inset rgba(0, 0, 255, 0.3))"}}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="name">Name : </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name="name" placeholder="name" id="name" defaultValue={user?.displayName} readOnly />
               </div>
               <div className='flex flex-col w-full'> 
                  <label className='text-xl mb-2'  htmlFor="image">Image : </label>
                  <input
                  className='w-full p-2  border-2 inputBox rounded-xl'
                     type="text"
                     name="image"
                     placeholder="image"
                     id="image"
                     defaultValue={user?.photoURL}
                     readOnly
                  />
               </div>
               
                <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="email"> Email :</label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="email"  id="email" defaultValue={user?.email}  required readOnly/>
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="service_id">service Id : </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name="service_id" placeholder="service_id" id="service_id" defaultValue={_id} readOnly  required/>
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="ratings">Ratings : </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name="ratings" placeholder="0 to 5" id="ratings"  required onBlur={handleRatings} />
                  {
                     error?.ratings && <ErrorMessage>{error?.ratings}</ErrorMessage>
                  }
               </div>
                </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="message">Message</label>
                  <textarea name="review" className='w-full p-2  border-2 inputBox rounded-xl' id="" cols="30" rows="11" onBlur={handleMessage} required></textarea>
                  {
                     error?.message && <ErrorMessage>{error.message}</ErrorMessage>
                  }
               </div>
            </div>
            <div>
               {
                  error?.general &&  <ErrorMessage>{error?.general}</ErrorMessage>
               }
               <button className='block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto submitButton hover:bg-black ' >Submit review</button>
            </div>
         </form>
      </div>
   );
};

export default ReviewForm;
