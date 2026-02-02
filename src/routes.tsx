import { createBrowserRouter } from "react-router-dom"
import LoginPage from "./pages/LoginPage/LoginPage"
import Layout from "./components/Layout"
import RegisterPage from "./pages/RegisterPage/RegisterPage"
import Dashboard from "./pages/Home/Dashboard"
import User from "./pages/Users/User"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  { path: "register", element: <RegisterPage /> },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
])

export default router
