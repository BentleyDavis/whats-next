import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./Error";
import App from "./App";
import HomePage from "./Home";
import ExamplesPage from "./Examples";
import ExamplePage from "./Example";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/examples",
                element: <ExamplesPage />,
            },
            {
                path: "/examples/:id/*",
                element: <ExamplePage />,
            },
        ],
    },
]);
