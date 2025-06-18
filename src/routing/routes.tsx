// src/routing/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import HomePage from "../pages/HomePage.tsx";
import RoadmapPage from "../pages/RoadmapPage.tsx";
import AuthPage from "../pages/AuthPage.tsx";
import ProfilePage from "../pages/ProfilePage.tsx";
import NotFoundPage from "../pages/NotFoundPage.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "roadmap",
                element: <RoadmapPage />,
                // loader: roadmapLoader, // для предзагрузки данных
            },
            {
                path: "auth",
                element: <AuthPage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
                // Для защищенных роутов:
                // loader: protectedLoader,
            },
            {
                path: "*",
                element: <NotFoundPage />,
            },
        ],
    },
]);

export default router;