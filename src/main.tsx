import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { NotFoundPage } from "./pages/not-found-page/not-found-page.tsx";
import { LoginPage } from "./pages/login-page/login-page.tsx";
import { FilesFoldersPage } from "./pages/files-folders-page/files-folders-page.tsx";
import { FilesListPage } from "./pages/files-list-page/files-list-page.tsx";
import { Layout } from "./components/layout/layout.tsx";
import { ProtectedRoute } from "./components/protected-route/protected-route.tsx";
import { RegisterPage } from "./pages/register-page/register-page.tsx";
import "./index.css";

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
    path: "/files-manager",
    element: (
      <Layout>
        <ProtectedRoute>
          <FilesFoldersPage />
        </ProtectedRoute>
      </Layout>
    ),
  },
  {
    path: "/files",
    element: (
      <Layout>
        <ProtectedRoute>
          <FilesListPage />
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
