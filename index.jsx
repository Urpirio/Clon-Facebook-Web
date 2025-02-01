import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Web from "./Src/Web";
import Web2 from "./Src/Web2";
import Web3 from "./Src/Web3";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Web/>
        },
        {
            path: "/Video",
            element: <Web2/>
        },
        {
            path: "/Market",
            element: <Web3/>
        }
    ]
);
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={routes} />
    </StrictMode>
);
