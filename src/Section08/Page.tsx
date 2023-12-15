import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Categories from "../Section07/Categories";
import Customers from "../Section07/Customers";
import Employees from "../Section07/Employees";
import Products from "../Section07/Product";
import Suppliers from "../Section07/Suppliers";
import Orders from "../Section07/Orders";
import Root from "./Root";
import PageLogin from "./Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    // errorElement: <Error />,
    children: [
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/customers",
        element: <Customers />,
      },
      {
        path: "/suppliers",
        element: <Suppliers />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <main style={{ padding: "1rem" }}>
        <p>404 Page not found</p>
      </main>
    ),
  },
]);

export default function Page() {
  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </React.Suspense>
    </div>
  );
}
