import Layout from "../components/layout/Layout";
import HomePage from "../pages/home-page/HomePage";
import MovieDetailPage from "../pages/movie-detail-page/MovieDetailPage";

export const menu = [
    {
        name: "Главная",
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "/movie-detail/:movieId",
                element: <MovieDetailPage/>
            },
            {
                path: "/auth",
                element: null
            },
            {
                path: "/profile",
                element: null
            },
        ]
    },
]