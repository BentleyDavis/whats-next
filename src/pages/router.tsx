import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import App from "./App";
import HomePage from "./Home";
import WeatherPage from "./Weather";
import TvPage from "./Tv";
import Tv2Page from "./Tv2";
import BT from "./BT"; // Import the new BT component

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
                path: "/bt", // Add the new route for BT page
                element: <BT />,
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
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/",
                element: <Tv2Page />,
            },
        ],
    },
]);
