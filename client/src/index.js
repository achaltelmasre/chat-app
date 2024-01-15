import ReactDOM from 'react-dom/client'
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';
import  './index.css';
import Home from './views/Home/Home';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/login',
    element: <Login/>
  },
  {
    path:'/signup',
    element: <Signup/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router= {router} />)
