import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/private/Home";
import About from "../pages/private/About";
import Login from "../pages/public/Login";
import Register from "../pages/public/Register";
import NotFound from "../pages/public/NotFound";
import Layout from "../layouts/Layout";

const router = createBrowserRouter(
    [{
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "about",
                name: "about",
                element: <About />

            },
            {
                path: "login",
                name: "login",
                element: <Login />

            },
            {
                index: true,
                element: <Home />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                index: true,
                element: <Home />
            },

        ]
    },






    ]
)

export default router