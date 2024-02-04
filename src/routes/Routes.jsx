import {createBrowserRouter} from "react-router-dom";
import Layout from "../layout/Layout";
import IndexHome from "../pages/Home/IndexHome";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import IndexMenu from "../pages/Menu/IndexMenu";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import IndexEvent from "../pages/Event/IndexEvent";
import IndexBlog from "../pages/Blog/IndexBlog";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        // Home
        {
            path: '/',
            element: <IndexHome/>
        },
        // Home Details
        {
            path: '/homedetails/:id',
            element: <HomeDetails/>,
        },
        // Menu
        {
            path: '/menu',
            element: <IndexMenu/>,
        },
        // Event 
        {
            path: '/event',
            element: <IndexEvent/>
        },
        // Blog
        {
            path: '/blog',
            element: <IndexBlog/>
        },
        // Auth
        {
            path: '/signin',
            element: <SignIn/>
        },
        {
            path: '/signup',
            element: <SignUp/>
        },
      ]
    },
  ]);

export default router;