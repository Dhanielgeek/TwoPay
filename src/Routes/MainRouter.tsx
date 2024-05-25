import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Forget from "../Auth/Forget";


export const MainRouter = createBrowserRouter([
    {
        path : '/',
        element: <Welcome/>
    },
    {
        path : '/signup',
        element: <SignUp/>
    },
    {
        path : '/login',
        element: <Login/>
    },
    {
        path : '/forget',
        element: <Forget/>
    }
])