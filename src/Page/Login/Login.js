import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';
import { BsGithub, BsGoogle } from 'react-icons/bs'; 
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import useTitle from '../../Hooks/useTitle';
import { RiLogoutBoxFill } from 'react-icons/ri';
const Login = () => {
   const {LogIn,  GithubSignIn, GoogleSignIn} = useContext(AuthContext); 
   const [userInfo, setUserInfo] = useState({ 
      email:'', 
      password:''
   }); 
   const [error, setError] = useState({
    email:'',     
    password:"",
    general:''
   })
   const navigate = useNavigate(); 
   const location = useLocation(); 
   const from = location.state?.from?.pathname || '/'


   const handleEmail = (e) => {
      const email = e.target.value; 
      if(!email){
         setError({...error, email:'please enter an email.'}); 
         setUserInfo({...userInfo, email:""}); 
         return; 
      }
      if(!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)){
         setError({...error, email:  'enter a valid email: '}); 
         setUserInfo({...userInfo, email: ''}); 
         return; 
      }
      setError({...error, email: ''}); 
      setUserInfo({...userInfo, email}); 
   }


   const handlePassword =(e) => {
      const password = e.target.value; 
      if(!password){
         setError({...error, password:'must enter a password'}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      if(!/(?=.*?[A-Z])/.test(password)){
         setError({...error, password: "must enter one uppercase"}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      if(!/(?=.*?[a-z])/.test(password)){
         setError({...error, password: "must enter one lowercase"}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      if(!/(?=.*?[0-9])/.test(password)){
         setError({...error, password: "must enter one digits"}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
         setError({...error, password: "must enter one lowercase"}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      if(password.length < 8 ){
         setError({...error, password:" password length must be 8 digits"}); 
         setUserInfo({...userInfo, password: ''}); 
         return; 
      }
      setError({...error, password: ''}); 
      setUserInfo({...userInfo, password}); 
      
   }

   const handleSubmit = (e) =>{
      setError({...error, general:''})
      e.preventDefault(); 
      const {email ,password} = userInfo; 
      if(!email || !password){
         setError({...error, general: "please fill the form carefully "}); 
         return; 
      }
      setError({...error, general: ""}); 
      LogIn(email , password)
      .then(res => {
         const user = res.user; 
         console.log(user); 
         const currentUser = {
            email : user?.email, 
         }
         fetch('http://localhost:5000/jwt', {
            method: 'post', 
            headers: {
               'Content-Type' : 'application/json', 
            }, 
            body: JSON.stringify(currentUser)
         })
         .then(res => res.json())
         .then(data => {
            if(data.token){
               localStorage.setItem('mr-dentist-token', data.token);           navigate(from, {replace: true}); 
               Swal.fire(
                  'Congratulations!!!',
                  'User Login Successfully!',
                  'success'
                );
               e.target.reset(); 
            }
         })
         .catch(err => err.json()); 
         
      })
      .catch(err => {
         setError({...error, general: err.message})
      });
   }

   const handleGoogleSignIn = () => {
      setError({...error, general: ''})
      GoogleSignIn()
      .then(res => {
         const user = res.user; 
         const currentUser = {
            email : user?.email, 
         }
         fetch('http://localhost:5000/jwt', {
            method: 'post', 
            headers: {
               'Content-Type' : 'application/json', 
            }, 
            body: JSON.stringify(currentUser)
         })
         .then(res => res.json())
         .then(data => {
            if(data.token){
               localStorage.setItem('mr-dentist-token', data.token);           navigate(from, {replace: true}); 
               Swal.fire(
                  'Congratulations!!!',
                  'Github Sign In Successfully!',
                  'success'
                );
            }
         })
         .catch(err => err.json());
      })
      .catch(err => {
         setError({...error, general: err.message})
      });
   }
    
   const handleGithubSignIn = () => {
      setError({...error, general:''})
      GithubSignIn()
      .then(res => {
         const user = res.user; 
         const currentUser = {
            email : user?.email, 
         }
         fetch('http://localhost:5000/jwt', {
            method: 'post', 
            headers: {
               'Content-Type' : 'application/json', 
            }, 
            body: JSON.stringify(currentUser)
         })
         .then(res => res.json())
         .then(data => {
            if(data.token){
               localStorage.setItem('mr-dentist-token', data.token);           navigate(from, {replace: true}); 
               Swal.fire(
                  'Congratulations!!!',
                  'Github Sign In Successfully!',
                  'success'
                );
            }
         })
         .catch(err => err.json());
      })
      .catch(err => {
         setError({...error, general: err.message})
      }); 
   }

   useTitle('Login');
   return (
      <div className='py-5  w-full registrationBg'>
      <div className='flex items-center flex-col  justify-center ' style={{minHeight: '500px'}}>
         <div className='p-5 w-4/5 lg:w-2/5 rounded-2xl bg-blue-300 ' data-aos="zoom-out-up" >
         <form className=' gap-5 flex flex-col w-full' onSubmit={handleSubmit} >
            <div>
               <h2 className='text-4xl text-center'>Login</h2>
            </div>
           <div className="grid grid-cols-1  gap-5">
           
            <div className='flex flex-col w-full'>
               <label className='text-xl mb-2' htmlFor="email">email:</label>
               <input className='w-full p-2  border-2 inputBox rounded-xl'  type="email" name='email' id='email' placeholder='email' required  onBlur={handleEmail}/>
               {
                  error?.email && <ErrorMessage>{error?.email}</ErrorMessage>
               }
            </div>
            <div className='flex flex-col w-full'>
               <label className='text-xl mb-2' htmlFor="password">Password</label>
               <input className='w-full p-2  border-2 inputBox rounded-xl'  type="password" id='password' placeholder='password' required onBlur={handlePassword} />
               {
                  error?.password &&  <ErrorMessage>{error?.password}</ErrorMessage>
               }
               {
                  error?.general &&  <ErrorMessage>{error?.general}</ErrorMessage>
               }
            </div>
           </div>
           
             <button className="block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto  hover:bg-black  "type="submit"  >Login</button>
             <div className='text-center capitalize'>
                     <p>have No account? <Link className='text-red-500' to='/register'>register</Link></p>
                </div>
         </form>
         <div className='flex items-center justify-center text-center text-sm mt-5  gap-5'>
               <button className='flex items-center justify-center flex-col gap-1  px-5 py-2 bg-white rounded-lg text-red-500' onClick={handleGoogleSignIn}>
                  <BsGoogle></BsGoogle>
                  <p>Google Sign In</p>
               </button>
               <button className='flex items-center justify-center flex-col gap-1  px-5 py-2 bg-white rounded-lg text-red-500' onClick={handleGithubSignIn}>
                  <BsGithub></BsGithub>
                  <p>Github Sign In</p>
               </button>
           </div>
         </div>
      </div>
   </div>
   );
};

export default Login;