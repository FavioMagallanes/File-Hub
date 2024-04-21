import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/not-found-page/not-found-page.tsx";
import { LoginPage } from "./pages/login-page/login-page.tsx";
import { FilesPage } from "./pages/files-page/files-page.tsx";
import { Layout } from "./components/layout/layout.tsx";

import "./index.css";
import { ProtectedRoute } from "./components/protected-route/protected-route.tsx";
import { RegisterPage } from "./pages/register-page/register-page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: (
      <Layout>
        <LoginPage />
      </Layout>
    ),
  },
  {
    path: "/register",
    element: (
      <Layout>
        <RegisterPage />
      </Layout>
    ),
  },
  {
    path: "/files",
    element: (
      <Layout>
        <ProtectedRoute>
          <FilesPage />
        </ProtectedRoute>
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
