import React, { useEffect, useState } from 'react';
import SingleServices from '../../Shared/SingleService/SingleServices';
import Banner from '../Banner/Banner';

const Home = () => {
   const [services, setServices] =  useState([]); 
   useEffect(()=>{
      fetch(`http://localhost:5000/services?size=${3}`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
   }, [])
   return (
      <div>
        <Banner></Banner>
        <div className='flex items-center justify-center'>
        <h2 className='text-3xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 '>My Services</h2>
        </div>
        <div className='grid grid-cols-3 gap-10 p-12 '>
            {
               services.map(service => <SingleServices key={service._id} everyService={service}></SingleServices>)
            }
        </div>
      </div>
   );
};

export default Home;