import React, { useState } from 'react';
import ShowRoute from '../Shared/ShowRoute/ShowRoute';
import toast from 'react-hot-toast';
import ErrorMessage from '../Shared/ErrorMessage/ErrorMessage';
import Swal from 'sweetalert2'
const AddServices = () => {
   const [serviceInfo , setServiceInfo] = useState({
      service: '', 
      price: '', 
      image: '', 
      ratings: '', 
      description: '', 
   }); 
   const [error, setError] = useState({
      service: '', 
      price: '', 
      image: '', 
      ratings: '', 
      description: '', 
     
   })


   // for service name: 
   const handleService = (e) => {
      const service = e.target.value; 
      if(!service){
         setServiceInfo({...serviceInfo, service:''}); 
         setError({...error, service: 'Please Enter a service name: '});
         toast.error("please enter a serviceName"); 
         return;
      }
      setError({...error, service: ''}); 
      setServiceInfo({...serviceInfo, service })
   }
   // for service price: 
   const handlePrice= (e) => {
      const price = parseFloat(e.target.value); 
      if(isNaN(price)){
         setServiceInfo({...serviceInfo, price: ''})
         setError({...error,  price: "enter a valid number"}); 
         return; 
      }
      setError({...error, price: ''}); 
      setServiceInfo({...serviceInfo, price}); 
   }
   // for service image : 
   const handleImage= (e) => {
      const image = e.target.value; 
      if(!image){
         setServiceInfo({...serviceInfo, image: ''}); 
         setError({...error, image: "image  url missing"});
         return; 
      }
      setServiceInfo({...serviceInfo, image})
      setError({...error, image: ''}); 
   }
   const handleRatings = (e) => {
         const value = e.target.value; 
         if(!value){
            setError({...error, ratings: 'please enter a ratings'})
            setServiceInfo({...serviceInfo, ratings: ''}); 
            return ;
         }
         const ratings = parseInt(e.target.value); 
         if(isNaN(ratings)){
            setError({...error, ratings: "ratings must be number"})
            setServiceInfo({...serviceInfo, ratings: ''}); 
            return; 
         } 
         if(ratings<0 ||  ratings>5){
            setError({...error, ratings: 'ratings must be between 0 to 5'}); 
            setServiceInfo({...serviceInfo, ratings:''}); 
            return; 
         }
        setError({...error, ratings: ''}); 
        setServiceInfo({...serviceInfo, ratings}); 
   }

   const handleDes = (e) => {
      const description = e.target.value; 
      console.log(description.length)
      if(!description.length){
         setError({...error, description:'Please enter a description'}); 
         setServiceInfo({...serviceInfo, description:''});
         return; 
      }
      if(description.length < 100){
         setError({...error, description: 'description must be 100 character'}); 
         setServiceInfo({...serviceInfo, description:''}); 
         return; 
      }
      setError({...error, description:''}); 
      setServiceInfo({...serviceInfo, description})
   }

   const handleSubmit = (e) => {
      e.preventDefault(); 
      const {service, price, image, ratings,description} = serviceInfo; 
      if(!service || !price || !image || !ratings || !description){
         toast.error('Please Fill the form'); 
         return; 
      }
      fetch('http://localhost:5000/services', {
         method: 'POST', 
         headers: {
            "content-type": 'application/json', 
         }, 
         body: JSON.stringify({service ,price, image, ratings, description })
      })
      .then(res => res.json())
      .then(data =>{        
         if(data.acknowledged){
            Swal.fire(
               'Thank You!',
               'Your services successfully added!',
               'success'
             )
            e.target.reset(); 
         }
      })
      .catch(err => console.log(err)); 
   }
   return (
      <div>
         <ShowRoute title="Add Service Form" first='Add Services'></ShowRoute>
         <div>

             <div className='flex items-center flex-col'>
               <h2 className='text-3xl text-blue-500 before:w-1/2 before:h-1 before:inline-block pb-3  before:absolute inline-block relative before:bottom-0 before:bg-blue-500 text-center my-5  '>Add An Service Now: </h2>
               <form className='p-5 w-4/5 lg:w-3/5 rounded-2xl bg-blue-300  gap-5 flex flex-col' onSubmit={handleSubmit} style={{ boxShadow: "6px 6px 6px inset rgba(0, 0, 255, 0.3, -6px -6px 6px inset rgba(0, 0, 255, 0.3))"}}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="service"> Service Name: </label>
                           <input onBlur={handleService} className='w-full p-2  border-2 inputBox rounded-xl' type="text" name='service' id="service" placeholder="Service Name : " required/>
                         {
                           error.service &&  <ErrorMessage> {error.service} </ErrorMessage> 
                         }
                        </div>
                        <div className='flex flex-col w-full' >
                           <label className='text-xl mb-2' htmlFor="price">Price :</label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name='price' id='price' placeholder='Price :'  onBlur={handlePrice} required/>
                           {
                           error.price &&  <ErrorMessage> {error.price} </ErrorMessage> 
                         }
                        </div>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="image">Image Url</label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name="image" id='image' placeholder='image' onBlur={handleImage}  required/>
                           {
                           error.image &&  <ErrorMessage> {error.image} </ErrorMessage> 
                         }
                        </div>
                        <div className='flex flex-col w-full'>
                           <label className='text-xl mb-2' htmlFor="ratings">Ratings : </label>
                           <input className='w-full p-2  border-2 inputBox rounded-xl'  type="text" name='ratings' id='ratings' placeholder="ratings" required  onBlur={handleRatings} />
                           {
                           error.ratings &&  <ErrorMessage> {error.ratings}  </ErrorMessage> 
                         }
                        </div>
                        <div className='flex flex-col w-full  md:col-span-2' >
                           <label className='text-xl mb-2' htmlFor="description">Description</label>
                           <textarea className='w-full p-2  border-2 inputBox rounded-xl'  name="description" id="description" cols="30" rows="5" placeholder='service description' onChange={handleDes} required></textarea>
                           {
                           error.description &&  <ErrorMessage> {error.description} </ErrorMessage> 
                         }
                        </div>
                       
                    </div>
                  <button className='block px-5 text-center text-xl text-white rounded-lg py-2 bg-orange-600 mx-auto submitButton hover:bg-black ' type='submit'>Post </button>
               </form>
               
             </div>
         </div>
      </div>
   );
};

export default AddServices;