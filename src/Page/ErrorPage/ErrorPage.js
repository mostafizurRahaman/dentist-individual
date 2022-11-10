import React from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../Hooks/useTitle';
import './ErrorPage.css'; 
const ErrorPage = () => {
   useTitle('404 Error ')
   return (
      <div className='flex items-center justify-center  h-screen gap-10 flex-col  errorPage'>
          <h2 className=' text-6xl md:text-9xl text-white text-center ' >Opps</h2>
          <h3 className='text-red-600 text-center text-4xl md:text-8xl'>404 error</h3>
         <Link to='/' > <button className='text-xl text-white bg-orange-500 px-5 py-3 rounded-lg block mx-auto'>Back To Home</button>
         </Link>
   </div>
   );
};

export default ErrorPage;