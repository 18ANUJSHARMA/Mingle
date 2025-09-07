
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Authentication/Login.jsx'
import Signup from './pages/Authentication/Signup.jsx'



const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ],
);

createRoot(document.getElementById('root')).render(
  <>
  
    <App />
    <RouterProvider router={router}/>
  </>
) 
