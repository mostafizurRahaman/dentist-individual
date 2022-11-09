import React, { useContext } from 'react';
import { TiStarFullOutline, TiStarOutline } from 'react-icons/ti';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import './SingleReview.css'; 
import { AiTwotoneDelete} from 'react-icons/ai'; 
import { FaEdit} from 'react-icons/fa'; 
import { Link } from 'react-router-dom';



const MySingleReview = ({review, handleDelete}) => {
   const {user} = useContext(AuthContext); 
 const {_id, message, email , ratings, service_id , service_name, profile, reviewer, dateField} = review; 
 const remaining = 5 -ratings; 
  

   return (
      <div className=' pb-10 p-3 reviewItems relative 'data-aos="flip-left" >
         <div className="w-40 h-160 rounded-full block p-2 review-profile bg-orange-600 ">
            <img src={profile} alt={reviewer} className=" w-full h-full rounded-full block " />
         </div>
        {
         user?.email === email && 
         <div className='w-full  text-4xl text-white flex justify-around bottom-3 absolute'>
             <AiTwotoneDelete onClick={()=> handleDelete(_id)} className='text-red-500' ></AiTwotoneDelete>
             <Link to={`/reviews-edit/${_id}`}> <FaEdit  className='text-green-500'></FaEdit> </Link>
         </div>
        }
         <div className='text-center p-5 space-y-3 mb-10'>
            <div className='' >
               <p className='flex items-center justify-center text-3xl text-orange-500'>{[...Array(ratings).keys()].map(rating => <TiStarFullOutline key={rating} ></TiStarFullOutline>)  }
               {[...Array(remaining).keys()].map(rating => <TiStarOutline key={rating}></TiStarOutline>)}
               </p>
            </div>

            <h3  className='text-2xl text-blue-400  font-bold ' style={{letterSpacing: '3px'}}>Author: {reviewer}</h3>
            <p className='text-orange-500 text-xl capitalize'>service: {service_name}</p>
            <p className='text-xl'>{message}</p>
            {/* <p>post at: </p> */}
         </div>
      </div>
   );
};

export default MySingleReview;