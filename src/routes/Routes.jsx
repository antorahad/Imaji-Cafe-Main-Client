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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
        loader: () => fetch('http://localhost:5000/items')
      },
      // Home Details
      {
        path: 'homedetails/:id',
        element: <PrivateProvider><HomeDetails /></PrivateProvider>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      // Order
      {
        path: 'order/:id',
        element: <PrivateProvider><Order /></PrivateProvider>,
        loader: ({ params }) => fetch(`http://localhost:5000/items/${params.id}`)
      },
      // Event 
      {
        path: 'event',
        element: <IndexEvent />,
        loader: () => fetch('http://localhost:5000/events')
      },
      // Event details
      {
        path: 'eventdetails/:id',
        element: <EventDetails/>,
        loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)

      },
      // Order Events
      {
        path: 'orderevent/:id',
        element: <OrderEvent/>,
        loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)
      },
      // Blog
      {
        path: 'blog',
        element: <IndexBlog />,
        loader: () => fetch('http://localhost:5000/blogs')
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
        element: <BookedOrder />
      }
    ]
  },
]);

export default router;