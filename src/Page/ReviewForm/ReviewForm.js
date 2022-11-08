import React from "react";

const ReviewForm = () => {
   return (
      <div className='flex items-center flex-col'>
          <h2 className='text-3xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 '>Add A Review</h2>
         <form className='p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300  gap-5 flex flex-col' style={{ boxShadow: "6px 6px 6px inset rgba(0, 0, 255, 0.3, -6px -6px 6px inset rgba(0, 0, 255, 0.3))"}}>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div>
                <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="name">Name : </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name="name" placeholder="name" id="name" />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="image">Image : </label>
                  <input
                  className='w-full p-2  border-2 inputBox rounded-xl'
                     type="text"
                     name="image"
                     placeholder="image"
                     id="image"
                  />
               </div>
               
                <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="email">Email :</label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="email" placeholder="email" id="email" />
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="service_id">service Id : </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name="service_id" placeholder="service_id" id="service_id" />
               </div>
                </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2'  htmlFor="message">Message</label>
                  <textarea name="message" className='w-full p-2  border-2 inputBox rounded-xl' id="" cols="30" rows="10"></textarea>
               </div>
            </div>
            <div>
               <button className='block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto submitButton hover:bg-black ' >Submit review</button>
            </div>
         </form>
      </div>
   );
};

export default ReviewForm;
