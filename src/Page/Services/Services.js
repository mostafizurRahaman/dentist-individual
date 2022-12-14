import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import useTitle from "../../Hooks/useTitle";
import ShowRoute from "../Shared/ShowRoute/ShowRoute";
import SingleServices from "../Shared/SingleService/SingleServices";

const Services = () => {
   const { setSpinner } = useContext(AuthContext);
   const [services, setServices] = useState([]);
   useEffect(() => {
      setSpinner(true);
      fetch("https://mr-dentist-server.vercel.app/services")
         .then((res) => res.json())
         .then((data) => {
            setServices(data);
            setSpinner(false);
         })
         .catch((err) => console.log(err))
         .finally(() => {
            setSpinner(false);
         });
   }, []);
   useTitle("Services");
   return (
      <div>
         <ShowRoute title="All Services" first="Services"></ShowRoute>
         <div className="flex flex-col items-center mt-10  ">
            <h2 className="text-4xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  ">
               My Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-12 ">
               {services.map((service) => (
                  <SingleServices
                     key={service._id}
                     everyService={service}
                  ></SingleServices>
               ))}
            </div>
         </div>
      </div>
   );
};

export default Services;
