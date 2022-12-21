import { RouterProvider } from "react-router-dom";
import "./App.css";
import {Toaster} from 'react-hot-toast'; 
import Routes from "./Rotues/Routes/Routes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import MyLoader from "./Page/Shared/MySpinner/MyLoader";
function App() {
   
   AOS.init({
      duration: 1000, 
      delay: 0, 
  })
   return (
      <div>
         <MyLoader ></MyLoader>
         <RouterProvider router={Routes}></RouterProvider>
         <Toaster></Toaster>
         
      </div>
   );
}

export default App;
