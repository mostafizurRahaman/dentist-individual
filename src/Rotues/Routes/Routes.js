import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddServices from "../../Page/AddServices/AddServices";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import MyReviews from "../../Page/MyReviews/MyReviews";
import Register from "../../Page/Register/Register";
import Services from "../../Page/Services/Services";



const Routes = createBrowserRouter([
   {
      path: "/", 
      element: <Main></Main>, 
      children: [
         {
            path: '/', 
            element: <Home></Home>
         }, 
         {
            path: "/home",
            element:<Home></Home>
         }, 
         {
            path: '/login', 
            element: <Login></Login>
         },
         {
            path: '/register',
            element: <Register></Register>
         }, 
         {
            path: "/services", 
            element: <Services></Services>, 
            
         }, 
         {
            path: '/my-reviews', 
            element: <MyReviews></MyReviews>
         }, 
         {
            path: '/add-services', 
            element: <AddServices></AddServices>
         }
      ]
   }
]); 


export default Routes; 