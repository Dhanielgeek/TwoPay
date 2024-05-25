import { createBrowserRouter } from "react-router-dom";
import Welcome from "../Components/Welcome";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import Forget from "../Auth/Forget";
import Dashboard from "../Client/Dashboard";
import PayBills from "../Client/PayBills";
import History from "../Client/History";
import Deposit from "../Client/Deposit";
import Withdraw from "../Client/Withdraw";
import Transfer from "../Client/Transfer";
import Maincontent from "../Client/Maincontent";


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
    },
    {
        path: '/main',
        element: <Dashboard/>,
        children:[
            {
                path: "pay-bills",
                element: <PayBills/>
            },
            {
                path: "history",
                element: <History/>
            },
            {
                path: "deposit",
                element:<Deposit/>
            },
            {
                path: "withdraw",
                element: <Withdraw/>
            },
            {
                path: "transfer",
                element: <Transfer/>
            },
            {
                path: "over",
                element:<Maincontent/>
            }
        ]
    }
])