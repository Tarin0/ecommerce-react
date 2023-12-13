
import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import MyCart from "../pages/MyCart";
import Login from "../pages/Login";
import Products from "../components/Products";
import Register from "../pages/Register";
import ProductDetails from "../components/ProductDetails";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/brand.json')
            },
            {
                path: '/products/:name',
                element: (<PrivateRoute>
                    <Products></Products>
                </PrivateRoute>),
                loader: () => fetch('https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/product')
            },

            {
                path: '/addProduct',
                element: (<PrivateRoute>
                    <AddProduct></AddProduct>
                </PrivateRoute>)
            },
            {
                path: '/updateProduct/:id',
                element: (<PrivateRoute>
                    <UpdateProduct></UpdateProduct>
                </PrivateRoute>),
                loader: ({ params }) => fetch(`https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/product/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: (<PrivateRoute>
                    <ProductDetails></ProductDetails>
                </PrivateRoute>),
                loader: ({ params }) => fetch(`https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/product/${params.id}`)
            },
            {
                path: '/cart',
                element: (<PrivateRoute>
                    <MyCart></MyCart>
                </PrivateRoute>),
                loader: () => fetch('https://ecommerce-server-nkd1t61ii-tarin0.vercel.app/cart')
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },
]);

export default router