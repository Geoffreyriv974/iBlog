import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./page/HomePage.tsx";
import AdminPage from "./page/AdminPage.tsx";
import ArticlePage from "./page/ArticlePage.tsx";
import CategoriePage from "./page/CatégoriePage.tsx";
import RegisterPage from "./page/RegisterPage.tsx";
import LoginPage from "./page/LoginPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
    {
        path: "/article",
        element: <ArticlePage />
    },
    {
        path: "/catégorie",
        element: <CategoriePage />
    },
    {
        path: "/register",
        element: <RegisterPage />
    },
    {
        path: "/login",
        element: <LoginPage />
    }
]);

function Route() {
    return <RouterProvider router={router} />;
}

export default Route