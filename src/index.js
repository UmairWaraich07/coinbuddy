import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import { CryptoProvider } from "./context/Cryptocontext";
import { CryptoDetails } from "./components/CryptoDetails";
import Crypto from "./pages/Crypto";
import { TrendingProvider } from "./context/Trendingcontext";
import { StorageProvider } from "./context/Storagecontext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Crypto />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/trending",
        element: <Trending />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
      {
        path: "/saved",
        element: <Saved />,
        children: [
          {
            path: ":coinId",
            element: <CryptoDetails />,
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CryptoProvider>
      <TrendingProvider>
        <StorageProvider>
          <RouterProvider router={router} />
        </StorageProvider>
      </TrendingProvider>
    </CryptoProvider>
  </React.StrictMode>
);

reportWebVitals();
