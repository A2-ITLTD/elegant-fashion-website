import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
 createBrowserRouter, 
 RouterProvider, 
} from "react-router-dom"; 
import "./index.css"; 
import Root from './Root.jsx';
import Home from './Components/Home.jsx';
import Landingpage from './Components/Landingpage.jsx';
import About from './Components/About.jsx';
const router = createBrowserRouter([ 
 { 
 path: "/", 
 element: <Root />,
 children: [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About></About>,
  },

  ]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

