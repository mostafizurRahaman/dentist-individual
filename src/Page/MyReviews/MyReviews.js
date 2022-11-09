import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';
import ShowRoute from '../Shared/ShowRoute/ShowRoute'
import MySingleReview from '../SingleReview/MySingleReview';


const MyReviews = () => {
   const {user} = useContext(AuthContext); 
   const [reviews, setReviews] = useState([]);
   useTitle('MyReviews'); 
   
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
            setReviews(data);
        })
        .catch(err => console.log(err)); 
    },[user?.email])


    const handleDelete = (_id)=>{
      const confirm = window.confirm('Are you sure to delete ???'); 
      if(confirm){
         fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE', 
         })
         .then(res => res.json())
         .then(data => {
            if(data.deletedCount){
               const remaining  = reviews.filter(r => r._id !== _id); 
               setReviews([...remaining]);   
            }
         })
         .catch(err => console.log(err)); 
      }
  }
   return (
      <div>
         <ShowRoute first='MyReviews'></ShowRoute>
         {
               reviews.length >= 1 ? <section className='p-10 flex flex-col items-center '>
      
               <h2 className='text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  '>Customer Reviews</h2>
             
                 <div className='grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-5 p-5  singleReviewContainer '>
                 {
                    reviews.map(review => <MySingleReview key={review._id}  review={review} handleDelete={handleDelete} >
     
                    </MySingleReview>)
                  } 
                 </div>
              </section> : 
              <div className='text-6xl text-red-500 font-bold flex items-center justify-center h-60'>
               <h2>No Reviews Found</h2>
              </div>
            }
      </div>
   );
};

export default MyReviews;