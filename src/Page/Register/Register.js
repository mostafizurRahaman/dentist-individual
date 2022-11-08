import React, { useState } from 'react';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';

const Register = () => {
   const [userInfo, setUserInfo] = useState({
      name: '', 
      email:'', 
      image:'',
      password:''
   }); 
   const [error, setError] = useState({
      name:'', 
      email:'', 
      image:'', 
      password:"",
      general:''
   })
   return (
      <div>
         <div>

         </div>
         <div>
            <form>
               <div>
                  <label htmlFor="name">name: </label>
                  <input type="text" id='name' placeholder='name' required />
                  {
                     error?.name && <ErrorMessage>{error?.name}</ErrorMessage>
                  }
               </div>
               <div>
                  <label htmlFor="email">email:</label>
                  <input type="email" name='email' id='email' placeholder='email' required />
                  {
                     error?.email && <ErrorMessage>{error?.email}</ErrorMessage>
                  }
               </div>
               <div>
                  <label htmlFor="image">Image Url: </label>
                  <input type="text" name='image' placeholder='image url' id='image' required />
                  {
                     error?.image && <ErrorMessage>{error?.image}</ErrorMessage>
                  }
               </div>
               <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" id='password' placeholder='password' required />
                  {
                     error?.password &&  <ErrorMessage>{error?.password}</ErrorMessage>
                  }
               </div>
                <div>
                   <input type="checkbox" name='checkbox' /> <label htmlFor="checkbox">accept the terms & service</label>
                </div>
            </form>
         </div>
      </div>
   );
};

export default Register;