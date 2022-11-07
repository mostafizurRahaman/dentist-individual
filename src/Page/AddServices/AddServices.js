import React from 'react';
import ShowRoute from '../Shared/ShowRoute/ShowRoute';

const AddServices = () => {
   return (
      <div>
         <ShowRoute title="Add Service Form" first='Add Services'></ShowRoute>
         <div>

             <div className='flex items-center flex-col'>
               <h2 className='text-3xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  '>Add An Service Now: </h2>
               <form className='p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300  gap-5 flex flex-col' style={{ boxShadow: "6px 6px 6px inset rgba(0, 0, 255, 0.3, -6px -6px 6px inset rgba(0, 0, 255, 0.3))"}}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="service"> Service Name: </label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl' type="text" name='service' id="service" placeholder="Service Name : " required/>
                        </div>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="price">Price :</label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name='price' id='price' placeholder='Price :' />
                        </div>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="image">Image Url</label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name="image" id='image' placeholder='image' />
                        </div>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="ratings">Ratings : </label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name='ratings' id='ratings' placeholder="ratings" />
                        </div>
                        <div className='flex flex-col w-full  md:col-span-2' >
                           <label className='text-xl mb-2' htmlFor="description">Description</label>
                           <textarea className='w-full p-2  border-2 inputBox rounded-xl'  name="description" id="description" cols="30" rows="10" placeholder='service description' ></textarea>
                        </div>
                    </div>
                  <button className='block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto submitButton hover:bg-black '>Post </button>
               </form>
             </div>
         </div>
      </div>
   );
};

export default AddServices;