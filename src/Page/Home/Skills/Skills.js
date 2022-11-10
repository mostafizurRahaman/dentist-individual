import React from 'react';
 import {MdHealthAndSafety} from 'react-icons/md'; 
 import {FaHandHoldingHeart} from 'react-icons/fa'; 
 import {CgTimelapse} from 'react-icons/cg'; 
 import {MdSupportAgent} from 'react-icons/md'; 
const Skills = () => {
   return (
      <div className='flex items-center justify-center flex-col gap-2 px-12'>
         <h2 className='text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 '>My Skills depends on my work </h2>
         <p className='text-center text-xl text-medium'>I want provide the best dental care for patient. Dental care is now on your door </p>
         <div className='grid grid-cols-1 md:grid-cols-2 my-10 lg:grid-cols-4 gap-10 '>
              <div className='py-20 px-5 text-center bg-orange-200 space-y-4 rounded-2xl '>
                     <div>
                        <MdHealthAndSafety className=' text-red-500  text-8xl   text-center mx-auto'></MdHealthAndSafety>
                     </div>
                     <div>
                        <h3 className='text-4xl mb-3  font-bold text-black '>Patient Safety</h3>
                        <p className='text-xl capitalize'>I first ensure patient safety. So I work care fully.</p>
                     </div>
               </div>
              <div className='py-20 px-5 text-center bg-blue-300 space-y-4 rounded-2xl'>
                     <div>
                        <FaHandHoldingHeart className=' text-orange-500  text-8xl   text-center mx-auto '></FaHandHoldingHeart>
                     </div>
                     <div>
                        <h3  className='text-4xl mb-3  font-bold text-black '>Care Welled</h3>
                        <p className='text-xl capitalize'>After getting any of my dental service you can get extra care.</p>
                     </div>
               </div>
              <div className='py-20 px-5 text-center bg-violet-300 space-y-4 rounded-2xl'>
                     <div>
                        <CgTimelapse className=' text-white  text-8xl   text-center mx-auto'></CgTimelapse>
                     </div>
                     <div>
                        <h3  className='text-4xl mb-3  font-bold text-black '>24/7 service</h3>
                        <p className='text-xl capitalize'>when you need dental treatment call me and get treatment. </p>
                     </div>
               </div>
              <div className='py-20 px-5 text-center bg-pink-300 space-y-4 rounded-2xl'>
                     <div className=' '>
                        <MdSupportAgent className=' text-green-800    text-8xl   text-center mx-auto'></MdSupportAgent>
                     </div>
                     <div>
                        <h3  className='text-4xl mb-3  font-bold text-black '>Online Support </h3>
                        <p className='text-xl capitalize'>You also get your service by contacting me online. </p>
                     </div>
               </div>
         </div>
      </div>
   );
};

export default Skills;