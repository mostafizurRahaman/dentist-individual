import { RouterProvider } from "react-router-dom";
import "./App.css";
import {Toaster} from 'react-hot-toast'; 
import Routes from "./Rotues/Routes/Routes";
function App() {
   return (
      <div>
         <RouterProvider router={Routes}></RouterProvider>
         <Toaster></Toaster>
      </div>
   );
}

export default App;
