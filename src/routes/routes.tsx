// routes.tsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFoundPage } from "../pages/not-found-page/not-found-page";
import { LoginPage } from "../pages/login-page/login-page";
import { FilesFoldersPage } from "../pages/files-folders-page/files-folders-page";
import { FilesListPage } from "../pages/files-list-page/files-list-page";
import { Layout } from "../components/layout/layout";
import { ProtectedRoute } from "../components/protected-route/protected-route";
import { RegisterPage } from "../pages/register-page/register-page";

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

export default router;
