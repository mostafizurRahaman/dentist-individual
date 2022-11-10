import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../../Hooks/useTitle';
import SingleServices from '../../Shared/SingleService/SingleServices';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Skills from '../Skills/Skills';

const Home = () => {
   const [services, setServices] =  useState([]); 
   useEffect(()=>{
      fetch(`http://localhost:5000/services?size=${3}`)
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err))
   }, [])
   useTitle('Home')
   return (
      <div>
        <Banner></Banner>
        <section className='flex items-center justify-center flex-col'>
            <h2 className='text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  mt-10 '>My Services</h2>
            
            <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-10 p-12 '>
                  {
                     services.map(service => <SingleServices key={service._id} everyService={service}></SingleServices>)
                  }
            </div>
            <Link to='/services'>
               <button className="block px-5 text-center text-xl text-white mt-5 py-2 bg-blue-400 mx-auto rounded-xl capitalize">
                  See All
               </button>
            </Link>
        </section>
       <Skills></Skills>
       <ContactUs></ContactUs>
      </div>
   );
};

export default Home;