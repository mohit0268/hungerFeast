import React from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import AllRestaurant from "./components/AllRestaurants";
import About from "./src/pages/About";
import ContactUs from './src/pages/ContactUs';
import Cart from "./src/pages/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<AppLayout/>,
    children:[

    {
      path:'/',
      element:<AllRestaurant />
    },
    {
      path:'/about',
      element:<About/>,
    },
    {
      path:'/contact',
      element:<ContactUs/>,
    },
    {
      path:'/cart',
      element:<Cart/>,
    },
    {
      path:'/restaurants/:resId',
      element:<RestaurantMenu/>
    }],
    errorElement:<ErrorPage />
  }
  ])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter}/>);
