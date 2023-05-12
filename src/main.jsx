import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes/root.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { initializeApp } from "firebase/app";
import ItemRoot from "./routes/items";
import Cart from "./routes/cart";
import Checkout from "./routes/checkout";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/category/:categoryId",
    element: <Root />,
  },
  {
    path: "/item/:itemId",
    element: <ItemRoot />,
  },

  {
    path: "/cart",
    element: <Cart />,
  },

  {
    path: "/checkout",
    element: <Checkout />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
