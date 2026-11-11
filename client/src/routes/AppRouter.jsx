import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from '../app/layouts/MainLayout';
import AuthLayout from "../app/layouts/AuthLayout";
import ClothingPage from "../features/catalog/ui/pages/ClothingPage";
import Accessories from "../features/catalog/ui/pages/Accessories";
import LookBook from "../features/catalog/ui/pages/LookBook";
import LoginPage from "../features/auth/ui/components/LoginForm";
import RegisterPage from "../features/auth/ui/components/RegisterForm";

const AppRouter = () => {
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <ClothingPage />,
      },
      {
        path: "accessories",
        element: <Accessories />,
      },
      {
        path: "lookbook",
        element: <LookBook />,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
    ],
  },
]);
 return <RouterProvider router={router} />;
}
export default AppRouter
