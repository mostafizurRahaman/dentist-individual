import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); 
    if(loading){
      return <div className='w-full h-screen text-red-500 font-bold'>
           <h1>loading.........</h1>
      </div>
    }
    if(user && user?.email){
      return children; 
    }

    return <Navigate to='/login' state={{from:location}} replace></Navigate>

};

export default PrivateRoute;