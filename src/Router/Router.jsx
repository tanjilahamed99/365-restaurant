import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import PrivateRoute from "./PrivateRoute";
// import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateMenu from "../Pages/Dashboard/UpdateMenu/UpdateMenu";
import Payment from "../Pages/Dashboard/payment/Payment";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <OurShop></OurShop>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/carts",
        element: (
          <PrivateRoute>
            <Carts></Carts>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allUsers",
        element: (
            <AllUsers></AllUsers>
        ),
      },
      {
        path: "/dashboard/addItems",
        // element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        element: <AddItems></AddItems>,
      },
      {
        path: "/dashboard/menageItems",
        element: (
            <ManageItems></ManageItems>
        ),
      },
      {
        path: "/dashboard/updateMenu/:id",
        element: (
            <UpdateMenu></UpdateMenu>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
        // loader: ({ params }) => fetch(`https://bistro-server-ten.vercel.app/menu/${params.id}`)
      },
    ],
  },
]);

export default Router;
