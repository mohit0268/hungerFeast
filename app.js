import React,{Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from './components/Header'
import AllRestaurant from "./components/AllRestaurants";
import ContactUs from "./src/pages/ContactUs";
import Cart from './src/pages/Cart'
import RestaurantMenu from "./components/RestaurantMenu";
import ErrorPage from "./components/ErrorPage";
import { createBrowserRouter ,RouterProvider, Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from './store/appStore'

//chunking 
//code splitting
//lazy loading
//dynamic loading
const About = lazy(()=>import("./src/pages/About"));

const AppLayout = () => {
  return (
    <Provider store={appStore}>
    <div>
      <Header />
      <Outlet/>
    </div>
    </Provider>
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
      element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
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
