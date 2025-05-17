import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import App from "./App";
import HomePage from "./Home";
import WeatherPage from "./Weather";
import TvPage from "./Tv";
import Tv2Page from "./Tv2";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/weather",
                element: <WeatherPage />,
            },
            {
                path: "/tv",
                element: <TvPage />,
            },
            {
                path: "/tv2",
                element: <Tv2Page />,
            },
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
