import React from 'react';
import { Link } from 'react-router-dom';
import dentist from '../../../Assets/dentist.png'; 
import './BannerBg.css'; 
const Banner = () => {

   return (
      <div className='flex  items-center px-12 py-5 bannerBg ' >
         <div className='w-full md:w-1/2  space-y-5'>
            <h1 className='text-6xl font-bold text-center capitalize  text-white space-y-20 ' style={{lineHeight: '1.3em'}}>Bringing you the <br /> Highest quality of <br />dental care</h1>
          <Link to='/services' className="block">
          <button className='px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto block' >Get Services Now</button>
          </Link>
         </div>
         <div className='w-full md:w-1/2 '>
            <img src={dentist} alt='dentist' className=' w-auto mx-auto ' style={{height: '450px'}} />
         </div>

      </div>
   );
};

export default Banner;