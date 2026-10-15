import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../app/layout/AuthLayout";
import MainLayout from "../app/layout/MainLayout";
import Login from "../features/auth/ui/pages/Login";
import Register from "../features/auth/ui/pages/Register";
import HomePage from "../shared/ui/pages/HomePage";
import AboutPage from "../shared/ui/pages/AboutPage";
import NotFound from "../shared/ui/pages/NotFound";
import MainProtected from "./protected/MainProtected";
import PublicProtected from "./protected/PublicProtected";
import ProductPage from "../features/products/ui/pages/ProductPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import { useEffect } from "react";
// import { hydrateUserApi } from "../features/auth/api/authApi";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authSlice";
import ProductDetailsPage from "../features/products/ui/pages/ProductDetailsPage";

const AppRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    (() => {
      // const res = await hydrateUserApi()
      // console.log(res)
      // dispatch(addUser(res))

      dispatch(hydrateUserAction());
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
            {
              path: "product",
              element: <ProductPage />,
            },
            {
              path: "product/:id",
              element: <ProductDetailsPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "order",
              element: <OrderPage />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
