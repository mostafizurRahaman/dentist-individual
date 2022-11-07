import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../Assets/Logo.png'; 
const Header = () => {
   return (
      <div className='flex items-center justify-between px-12 bg-gray-800 bg-opacity-80 text-white h-20 w-full relative top-0 left-0'>
          <div className='flex items-center justify-center'>
             <img src={logo} alt="dentist" className='w-16 h-16'/>
             <h2>Mr. Dentist</h2>
          </div>
          <div className='flex items-center gap-3 font-medium'>
               <Link to='/home'>Home</Link>
               <Link to='/services'>Services</Link>
               <Link to='/login'>Login</Link>
               <Link to='/register'>Register</Link>
               <Link to='/my-reviews'>MyReviews</Link>
               <Link to='/add-services'>Add Services</Link>
          </div>
      </div>
   );
};

export default Header;