import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import App from "./App";
import HomePage from "./Home";
import ExamplesPage from "./Examples";
import WeatherPage from "./Weather";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/examples",
                element: <ExamplesPage />,
            },
            {
                path: "/weather",
                element: <WeatherPage />,
            },
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
]);
