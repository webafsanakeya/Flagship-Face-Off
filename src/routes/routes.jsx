import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Favorites from "../pages/Favorites";
import About from "../pages/About";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
    {
      path:'/',
      Component: MainLayout,
      errorElement: <ErrorPage />,
      children: [
        {
            path:'/',
            element: <Home />,
            hydrateFallbackElement:<p>Loading, please wait...</p>,
            loader: ()=> fetch('../phones.json'),
        },
        {
          path: '/favorites',
          element: <Favorites />
        
  
        },
        {
          path: '/About',
          element: <About />,
        },
        {
          path: '/Phone-details/:id',
          element: <PhoneDetails />,
          hydrateFallbackElement:<p>Loading, please wait...</p>,
          loader: () =>fetch('../phones.json'),
        }
      ],
  
  },
  
  ])
  