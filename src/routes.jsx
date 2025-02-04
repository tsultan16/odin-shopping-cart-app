import Layout from "./components/Layout";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ErrorBoundary from "./components/ErrorBoundary";

const routes = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
];

export default routes;
