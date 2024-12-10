import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ProtectedRoute } from "./context/ProtectedRoute";
import Header from "./components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });
  const clientId =
    "931880666628-lsoqfia38il4ukjce9fqnsovpa1725ad.apps.googleusercontent.com"; // Paste your Client ID here

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <Routes className="appLayout">
              <Route path="/" element={<LoginPage />}>
                <Route index element={<Navigate replace to="fb" />} />
                <Route path="/fb" element={<LoginPage />} />
              </Route>

              <Route
                path="fb/dashboard"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
            </Routes>
          </QueryClientProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
