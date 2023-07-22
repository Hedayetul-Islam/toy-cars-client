import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";


export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
            path: '/' ,
            element: <Home></Home>
        },
        {
            path: 'blogs',
            element: <Blogs></Blogs>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <Signup></Signup>
        },
        {
          path: 'add-toy',
          element: <AddToy></AddToy>
        },
        {
          path: 'all-toys',
          element: <AllToys></AllToys>
        },
        {
          path: 'my-toys',
          element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
        }
      ]
    },
  ]);