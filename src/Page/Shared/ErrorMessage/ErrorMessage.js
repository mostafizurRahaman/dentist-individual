import React from 'react';
import {SlClose} from 'react-icons/sl'
const ErrorMessage = ({children}) => {
   return (
      <p className='capitalize mt-1 text-red-500 flex items-center justify-start pl-3 font-bold gap-3'> <SlClose></SlClose> <span>{children}</span> </p>
   );
};

export default ErrorMessage;