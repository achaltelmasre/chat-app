import React from 'react'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom'
import  './index.css';
import Home from './views/Home/Home'
import Login from './views/Login/Login'
import Signup from './views/Signup/Signup'

const router = createBrowserRouter([

  {
    path:'/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <Signup/>
  }
]);

const root = reactDom.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {router}  />)