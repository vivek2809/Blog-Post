import { createBrowserRouter } from "react-router-dom";
// import Default from "../Component/common/Default";
import Layout from "../Component/common/Layout";
import Home from '../Component/pages/Home'
import NoMatch from "../Component/pages/NoMatch";
import Register from "../Component/pages/Register";
import UserLoginForm from "../Component/pages/UserLoginForm";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/home',
                element:(
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                )
            },
            {
                path:'/login',
                element:<UserLoginForm/>
            },
            {
                path:'/sign-up',
                element:<Register/>
            },
        ]
        
    },
    {
        path:'*',
        element:<NoMatch/>
    }
])

export {router}