import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import App from "./App";
import HomePage from "./Home";
import WeatherPage from "./Weather";
import TvPage from "./Tv";


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
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
