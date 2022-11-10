import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddServices from "../../Page/AddServices/AddServices";
import Blog from "../../Page/Blog/Blog";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import MyReviews from "../../Page/MyReviews/MyReviews";
import Register from "../../Page/Register/Register";
import ReviewEdit from "../../Page/ReviewEdit/ReviewEdit";
import ServiceDetails from "../../Page/ServiceDetails/ServiceDetails";
import Services from "../../Page/Services/Services";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const Routes = createBrowserRouter([
   {
      path: "/",
      element: <Main></Main>,
      children: [
         {
            path: "/",
            element: <Home></Home>,
         },
         {
            path: "/home",
            element: <Home></Home>,
         },
         {
            path: "/login",
            element: <Login></Login>,
         },
         {
            path: "/register",
            element: <Register></Register>,
         },
         {
            path: "/services",
            element: <Services></Services>,
         },
         {
            path: "/my-reviews",
            element: (
               <PrivateRoute>
                  {" "}
                  <MyReviews></MyReviews>{" "}
               </PrivateRoute>
            ),
         },
         {
            path: "/add-services",
            element: (
               <PrivateRoute>
                  <AddServices></AddServices>{" "}
               </PrivateRoute>
            ),
         },
         {
            path: "/services/:id",
            element: <ServiceDetails></ServiceDetails>,
            loader: async ({ params }) =>
               fetch(
                  `https://mr-dentist-server.vercel.app/services/${params.id}`
               ),
         },
         {
            path: "/reviews-edit/:id",
            element: (
               <PrivateRoute>
                  <ReviewEdit> </ReviewEdit>
               </PrivateRoute>
            ),
            loader: async ({ params }) =>
               fetch(
                  `https://mr-dentist-server.vercel.app/review/${params.id}`,
                  {
                     headers: {
                        authorization: `Bearer ${localStorage.getItem(
                           "mr-dentist-token"
                        )}`,
                     },
                  }
               ),
         },
         {
            path: "/blog",
            element: <Blog></Blog>,
         },
         {
            path: "*",
            element: <ErrorPage></ErrorPage>,
         },
      ],
   },
]);

export default Routes;
