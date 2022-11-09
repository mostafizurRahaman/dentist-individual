import React, { useContext } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './SingleReview.css'; 
import {AiTwotoneDelete} from 'react-icons/ai'; 
import {FaDAndD, FaEdit} from 'react-icons/fa'; 
const SingleReview = ({review}) => {
   const {user} = useContext(AuthContext); 
 const {message, email , ratings, service_id , service_name, profile, reviewer, dataField} = review; 
 const remaining = 5 -ratings; 
   return (
      <div className=' pb-10 p-3 reviewItems relative' >
         <div className="w-40 h-160 rounded-full block p-2 review-profile bg-orange-600 ">
            <img src={profile} alt={reviewer} className=" w-full h-full rounded-full block " />
         </div>
        {
         user?.email === email && 
         <div className='w-full  text-4xl text-white flex justify-around bottom-3 absolute'>
             <AiTwotoneDelete className='text-red-500'></AiTwotoneDelete>
             <FaEdit className='text-green-500'></FaEdit>
         </div>
        }
         <div className='text-center p-5 space-y-3 mb-10'>
            <div className='' >
               <p className='flex items-center justify-center text-3xl text-orange-500'>{[...Array(ratings).keys()].map(rating => <TiStarFullOutline key={rating} ></TiStarFullOutline>)  }
               {[...Array(remaining).keys()].map(rating => <TiStarOutline></TiStarOutline>)}
               </p>
            </div>
            <h3 className='text-3xl text-white font-bold ' style={{letterSpacing: '3px'}}>{reviewer}</h3>
            <p className='text-xl'>{message}</p>
         </div>
      </div>
   );
};

export default SingleReview;