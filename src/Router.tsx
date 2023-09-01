import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Validate } from "./pages";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Validate />,
      },
      {
        path: "*",
        element: <Error />
      },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
