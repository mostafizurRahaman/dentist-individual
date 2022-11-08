import React, { useEffect, useState } from 'react';
import ShowRoute from '../Shared/ShowRoute/ShowRoute';

const Services = () => {
   const [services, setServices] = useState([]); 
   useEffect(()=>{
         fetch('http://localhost:5000/services')
         .then(res => res.json())
         .then(data => setServices(data))
         .catch(err => console.log(err))
   }, [])
   console.log(services);
   return (
      <div>
         <ShowRoute title="All Services" first='Services'></ShowRoute>
      </div>
   );
};

export default Services;