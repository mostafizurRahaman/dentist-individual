import React, { useContext, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';
import {BsGithub, BsGoogle} from 'react-icons/bs'; 
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import useTitle from '../../Hooks/useTitle';
const Register = () => {
   const navigate = useNavigate(); 
   const {createUser, addInfo, GithubSignIn, GoogleSignIn} = useContext(AuthContext); 
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
   const [isDisabled, setIsDisabled] = useState(false);
   const handleName = (e) => {
      const name = e.target.value; 
      if(!name){
         setError({...error, name:"Please enter a name"}); 
         setUserInfo({...userInfo, name:''}); 
         return
      }
      setError({...error, name: ''}); 
      setUserInfo({...userInfo, name});   
   }
   
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

   const handleImage = (e) => {
      const image = e.target.value; 
      if(!image){
         setError({...error, image: 'must enter an url'}); 
         setUserInfo({...userInfo, image: ''}); 
         return;
      }
      setError({...error, image:''}); 
      setUserInfo({...userInfo, image})
      
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
      setError({...error, general:""})
      e.preventDefault(); 
      const {name, email , image, password} = userInfo; 
      if(!name || !email || !image || !password){
         setError({...error, general: "please fill the form carefully "}); 
         return; 
      }
      setError({...error, general: ""}); 
      createUser(email, password)
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
               localStorage.setItem('mr-dentist-token', data.token);           navigate("/");    
               Swal.fire(
                  'Congratulations!!!',
                  'User Created Successfully!',
                  'success'
                )
                handleProfile({displayName: name, photoURL:  image})
                e.target.reset();             
            }
         })
         .catch(err => err.json());          
         
      })
      .catch(err => {
         setError({...error, general: err.message})
      }); 
   }
   
   const handleProfile  = (profile) => {
      addInfo(profile)
      .then(()=>{})
      .catch(err => console.log(err));
   }


   const handleGoogleSignIn = () => {
      setError({...error, general:""})
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
               localStorage.setItem('mr-dentist-token', data.token);           navigate("/");    
               Swal.fire(
                  'Congratulations!!!',
                  'Google Sign in Successful!',
                  'success'
                )
                          
            }
         })
         .catch(err => err.json());
      })
      .catch(err => {
         setError({...error, general: err.message})
      });
   }
    
   const handleGithubSignIn = () => {
      setError({...error, general:""})
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
               localStorage.setItem('mr-dentist-token', data.token);           navigate("/");    
               Swal.fire(
                  'Congratulations!!!',
                  'GitHub Singin Successful!',
                  'success'
                )            
            }
         })
         .catch(err => err.json());
      })
      .catch(err => {
         setError({...error, general: err.message})
      }); 
   }

   useTitle('Registration');
   return (
      <div className='py-5  w-full registrationBg'>
         <div className='flex items-center flex-col  justify-center ' style={{minHeight: '500px'}}>
            <div className='p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300 ' data-aos="zoom-out-up" >
            <form className=' gap-5 flex flex-col w-full' onSubmit={handleSubmit} >
               <div>
                  <h2 className='text-4xl text-center'>Sign Up Now</h2>
               </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2' htmlFor="name">name: </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl'  onBlur={handleName} type="text" id='name' placeholder='name' required  />
                  {
                     error?.name && <ErrorMessage>{error?.name}</ErrorMessage>
                  }
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2' htmlFor="email">email:</label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl'  type="email" name='email' id='email' placeholder='email' required  onBlur={handleEmail}/>
                  {
                     error?.email && <ErrorMessage>{error?.email}</ErrorMessage>
                  }
               </div>
               <div className='flex flex-col w-full'>
                  <label className='text-xl mb-2' htmlFor="image">Image Url: </label>
                  <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name='image' placeholder='image url' id='image' required onBlur={handleImage} />
                  {
                     error?.image && <ErrorMessage>{error?.image}</ErrorMessage>
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
              
                <div className='text-center capitalize'>
                   <p className='flex items-center gap-1 justify-center'><input type="checkbox" name='checkbox' id="checkbox" onChange={(e)=> setIsDisabled(e.target.checked)} /> <label htmlFor="checkbox">accept the terms & service</label></p>
                     <p>Already Have a Account? <Link className='text-red-500' to='/login'>Login</Link></p>
                </div>
                <button className={`block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto  ${isDisabled || ' hover:bg-black bg-opacity-80 pointer-events-none'}`} type="submit" disabled={!isDisabled}>Sign Up</button>
                
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

export default Register;