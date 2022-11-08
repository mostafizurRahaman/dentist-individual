import { RouterProvider } from "react-router-dom";
import "./App.css";
import {Toaster} from 'react-hot-toast'; 
import Routes from "./Rotues/Routes/Routes";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
function App() {
   AOS.init({
      duration: 2000, 
      delay: 0, 
  })
   return (
      <div>
         <RouterProvider router={Routes}></RouterProvider>
         <Toaster></Toaster>
         
      </div>
   );
}

export default App;
