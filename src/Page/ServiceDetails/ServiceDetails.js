import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { PhotoProvider, PhotoView } from "react-photo-view";
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import "react-photo-view/dist/react-photo-view.css";
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import ReviewForm from '../ReviewForm/ReviewForm';
import useTitle from '../../Hooks/useTitle';


const ServiceDetails = () => {
   const {user} = useContext(AuthContext); 
   const singleService = useLoaderData()
   const {service, image, price, ratings, description, _id} = singleService; 
   const remaingRatings = 5- ratings; 
   useTitle(service);
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
                     <TiStarFullOutline key={rating}></TiStarFullOutline>
                  ))}
                  {[...Array(remaingRatings).keys()].map((rating) => (
                     <TiStarOutline key={rating}></TiStarOutline>
                  ))}
                  </p>
               </div>
               <button className="block px-5 text-center text-xl text-white mt-5 py-2 bg-orange-600 mx-auto">Check Out Now</button>               
            </div>
         </section>
         <section>
            {
               user?.uid ?  <ReviewForm></ReviewForm> : <div className='my-10  flex items-center justify-center animate-bounce hover:animate-none '>
                <Link className='bg-blue-500 text-white px-3 py-2 rounded-xl hover:bg-orange-600 duration-1000' to='/login'>  <h4 className='text-2xl'>For writing  a review , Please Login</h4></Link>
               </div>
            }
         </section>
      </div>
   );
};

export default ServiceDetails;