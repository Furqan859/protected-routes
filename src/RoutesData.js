import { useRoutes  } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import About from './component/HeaderNames/About';
import NavLayout from "./component/Layout/NavLayout";
import ProtectLayput from './component/Layout/ProtectLayput';
import SignUp from './component/HeaderNames/SignUp';
import {Navigate} from 'react-router-dom';
export function RoutesData () {
   
    const isLoggedIn = () => false;
    return useRoutes([




    {
        path: "/dashboard",
        element: isLoggedIn ? (
          <NavLayout />
        ) : (
          <Navigate to="/navbar" replace />
        ),
        children: [
          {
            path: "navbar",
            element: <Navigate to="/navbar" replace />,
          },
          { path: "main", element: <ProtectLayput/> },
        ]
        }
    
     
    //     { path: "/", element: <Navbar/> },
    //     { path: "/about", element: <About /> },
    //     { path: "/login", element: <ProtectLayput /> },
    //     { path: "/signup", element: <NavLayout/> },
    //     { path: "/signup", element: <SignUp/> },
    
       
       
    
    

    ])
        
}