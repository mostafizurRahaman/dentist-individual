import React from "react";
import { MagnifyingGlass } from "react-loader-spinner";

const Myspinner = () => {
   return (
      <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center h-screen">
         <MagnifyingGlass
            visible={true}
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

export default Myspinner;
