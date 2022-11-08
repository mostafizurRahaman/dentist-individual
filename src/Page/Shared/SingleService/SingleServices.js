import React from "react";
import { Link } from "react-router-dom";
import { TiStarOutline, TiStarFullOutline } from "react-icons/ti";
import { PhotoProvider, PhotoView } from "react-photo-view";

import "react-photo-view/dist/react-photo-view.css";
import "./SingleService.css";

const SingleServices = ({ everyService }) => {
   const { service, _id, image, price, ratings, description } = everyService;
   const remaingRatings = 5 - ratings;
   return (
      <div className="bg-gray-700 text-white p-5 singleService  rounded-md" data-aos='zoom-in-right'>
         <div className="imgContainer">
            <PhotoProvider >
               <PhotoView src={image}>
                  <img
                     src={image}
                     alt={service}
                     className="w-full h-60 rounded-tl-2xl rounded-br-2xl "
                  />
               </PhotoView>
            </PhotoProvider>
         </div>
         <div className="p-5">
            <h3 className="text-2xl text-center">{service}</h3>
            <div className="flex items-center justify-between my-3">
               <p className="text-3xl text-capitalize font-bold text-orange-500 font-serif ">
                  ${price}
               </p>
               <p className="flex text-2xl text-orange-500">
                  {[...Array(ratings).keys()].map((rating) => (
                     <TiStarFullOutline key={rating}></TiStarFullOutline>
                  ))}
                  {[...Array(remaingRatings).keys()].map((rating) => (
                     <TiStarOutline key={rating}></TiStarOutline>
                  ))}
               </p>
            </div>
            <p>
               {description.length > 100
                  ? description.slice(0, 100) + "...."
                  : description}
            </p>
            <Link to={`/services/${_id}`}>
               <button className="block px-5 text-center text-xl text-white mt-5 py-2 bg-orange-600 mx-auto">
                  Read More...
               </button>
            </Link>
         </div>
      </div>
   );
};

export default SingleServices;
