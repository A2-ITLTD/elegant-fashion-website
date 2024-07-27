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
import Contact from './Components/Contact.jsx';
import Products from './Components/Products.jsx';
import ItemShirt from './Components/ItemShirt.jsx';
import ItemTshirt from './Components/ItemTshirt.jsx';
import ItemPolo from './Components/ItemPolo.jsx';
import ItemWinter from './Components/ItemWinter.jsx';
import ItemHoodie from './Components/ItemHoodie.jsx';
import ItemDenim from './Components/ItemDenim.jsx';
import ItemShorts from './Components/ItemShorts.jsx';
import ItemTrouser from './Components/ItemTrouser.jsx';
import ItemCargo from './Components/ItemCargo.jsx';
import ItemLeggings from './Components/ItemLeggings.jsx';
import ItemJeans from './Components/ItemJeans.jsx';
import Policy from './Components/Policy.jsx';
import ItemSwimwear from './Components/ItemSwimwear.jsx';
import Profile from './Components/Profile.jsx';
import ProfileAbout from './Components/ProfileAbout.jsx';
import ProfileBrands from './Components/ProfileBrands.jsx';
import ProfileDiscover from './Components/ProfileDiscover.jsx';
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
  {
    path: "/Contact",
    element: <Contact></Contact>,
  },
  {
    path: "/Products",
    element: <Products></Products>,
  },
  {
    path: "/Policy",
    element: <Policy></Policy>
  },
  {
    path: "/Shirt",
    element: <ItemShirt></ItemShirt>,
  },
  {
    path: "/Tshirt",
    element:  <ItemTshirt></ItemTshirt>,
  },
  {
    path: "/Polo",
    element: <ItemPolo></ItemPolo>,
  },
  {
    path: "/Winter",
    element: <ItemWinter></ItemWinter>,
  },
  {
    path: "/Hoodie",
    element: <ItemHoodie></ItemHoodie>,
  },
  {
    path: "/Denim",
    element: <ItemDenim></ItemDenim>,
  },
  {
    path: "/Shorts",
    element: <ItemShorts></ItemShorts>,
  },
  {
    path: "/Trouser",
    element: <ItemTrouser></ItemTrouser>,
  },
  {
    path: "/Cargo",
    element: <ItemCargo></ItemCargo>,
  },
  {
    path: "/Leggings",
    element: <ItemLeggings></ItemLeggings>,
  },
  {
    path: "/Jeans",
    element: <ItemJeans></ItemJeans>,
  },
  {
    path: "/swimwear",
    element: <ItemSwimwear></ItemSwimwear>,
  },
  {
    path: "/Profile",
    element: <Profile></Profile>,
  },
  {
    path: "/profileabout",
    element: <ProfileAbout></ProfileAbout>,
  },
  {
    path: "/profilebrands",
    element: <ProfileBrands></ProfileBrands>,
  },
  {
    path: "/profilediscover",
    element: <ProfileDiscover></ProfileDiscover>,
  },

  ]
 }, 
]); 
 
ReactDOM.createRoot(document.getElementById("root")).render( 
 <React.StrictMode> 
 <RouterProvider router={router} /> 
 </React.StrictMode> 
); 

