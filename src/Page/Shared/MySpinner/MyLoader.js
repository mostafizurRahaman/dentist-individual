import React, { useContext } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const MyLoader = () => {
   const {spinner} = useContext(AuthContext); 
   return (
     
           <div className={`absolute top-0 left-0 right-0 bottom-0  flex items-center justify-center h-screen  ${spinner ? 'block' : 'hidden'}`}>
                   <MagnifyingGlass
            
               visible={spinner}
               height="150"
               width="150"
               ariaLabel="MagnifyingGlass-loading"
               wrapperStyle={{}}
               wrapperClass="MagnifyingGlass-wrapper"
               glassColor="#c0efff"
               color="#e15b64"
            />
           </div>
   );
};

export default MyLoader;
