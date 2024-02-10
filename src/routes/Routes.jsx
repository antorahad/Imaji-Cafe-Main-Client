import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import IndexHome from "../pages/Home/IndexHome";
import HomeDetails from "../pages/HomeDetails/HomeDetails";
import IndexMenu from "../pages/Menu/IndexMenu";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import IndexEvent from "../pages/Event/IndexEvent";
import IndexBlog from "../pages/Blog/IndexBlog";
import Order from "../pages/Order/Order";
import PrivateProvider from "../private/PrivateProvider";
import BookedOrder from "../pages/BookOrder/BookedOrder";
import EventDetails from "../pages/EventDetails/EventDetails";
import OrderEvent from "../pages/OrderEvent/OrderEvent";
import BookEvent from "../pages/BookEvent/BookEvent";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import Error from "../error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      // Home
      {
        path: '/',
        element: <IndexHome />
      },
      // Menu
      {
        path: 'menu',
        element: <IndexMenu />,
        loader: () => fetch('https://imaji-server.vercel.app/items')
      },
      // Home Details
      {
        path: 'homedetails/:id',
        element: <PrivateProvider><HomeDetails /></PrivateProvider>,
        loader: ({ params }) => fetch(`https://imaji-server.vercel.app/items/${params.id}`)
      },
      // Order
      {
        path: 'order/:id',
        element: <PrivateProvider><Order /></PrivateProvider>,
        loader: ({ params }) => fetch(`https://imaji-server.vercel.app/items/${params.id}`)
      },
      // Event 
      {
        path: 'event',
        element: <IndexEvent />,
        loader: () => fetch('https://imaji-server.vercel.app/events')
      },
      // Event details
      {
        path: 'eventdetails/:id',
        element: <PrivateProvider><EventDetails/></PrivateProvider>,
        loader: ({ params }) => fetch(`https://imaji-server.vercel.app/events/${params.id}`)

      },
      // Order Events
      {
        path: 'orderevent/:id',
        element: <PrivateProvider><OrderEvent/></PrivateProvider>,
        loader: ({ params }) => fetch(`https://imaji-server.vercel.app/events/${params.id}`)
      },
      // Blog
      {
        path: 'blog',
        element: <IndexBlog />,
        loader: () => fetch('https://imaji-server.vercel.app/blogs')
      },
      {
        path: 'blogdetails/:id',
        element: <BlogDetails/>,
        loader: ({params}) => fetch(`https://imaji-server.vercel.app/blogs/${params.id}`)
      },
      // Auth
      {
        path: 'signin',
        element: <SignIn />
      },
      {
        path: 'signup',
        element: <SignUp />
      },
      // User 
      {
        path: 'bookedorders',
        element: <PrivateProvider><BookedOrder /></PrivateProvider>
      },
      {
        path: 'bookevents',
        element: <PrivateProvider><BookEvent/></PrivateProvider>
      }
    ]
  },
]);

export default router;