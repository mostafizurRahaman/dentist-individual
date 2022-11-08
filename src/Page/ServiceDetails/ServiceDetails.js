import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
const ServiceDetails = () => {
   const singleService = useLoaderData()
   const {service, image, price, ratings, description, _id} = useLoaderData(); 
   const remaingRatings = 5- ratings; 
   return (
      <div>
         <section className='grid grid-cols-1 md:grid-cols-2 justify-center gap-10 px-12 mt-5 '>
            <div className=" p-2 bg-blue-500 rounded-2xl flex flex-col">
               <div className='flex-grow'>
               <PhotoProvider>
                  <PhotoView src={image}>
                        <img src={image} alt={service} className="w-full rounded-2xl h-full " />
                  </PhotoView>
               </PhotoProvider>
               </div>
              <div>
              <h2 className='text-4xl text-center bg-black py-2 text-white rounded-2xl mt-2'>{service}</h2>
              </div>
            </div>
            <div className=' bg-gray-700 p-10 text-white rounded-2xl  h-full' >
               <h2 className='text-4xl text-white text-center mb-5 '>Description: </h2>
               <p className='text-xl'>{description}</p>
               <div className='text-center space-y-3  mt-3'>
                  <p className='text-3xl capitalize  '>price: ${price}</p>
                  <p className='flex items-center gap-1 justify-center text-2xl text-orange-500'>
                  {[...Array(ratings).keys()].map((rating) => (
                     <TiStarFullOutline></TiStarFullOutline>
                  ))}
                  {[...Array(remaingRatings).keys()].map((rating) => (
                     <TiStarOutline></TiStarOutline>
                  ))}
                  </p>
               </div>
               <button className="block px-5 text-center text-xl text-white mt-5 py-2 bg-orange-600 mx-auto">Check Out Now</button>               
            </div>
         </section>
         <section>
           
         </section>
      </div>
   );
};

export default ServiceDetails;