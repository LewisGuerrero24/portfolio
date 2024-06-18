import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './Css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import AboutMe from './Components/AboutMe.jsx';
import Projects from './Components/Projects.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutMe/>,
  },
  {
    path:"/projects",
    element:<Projects/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(     
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
