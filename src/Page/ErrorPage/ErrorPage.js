import React from 'react';
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
   useTitle('404 Error ')
   return (
      <div>
         <h1>Error Page. </h1>
      </div>
   );
};

export default ErrorPage;