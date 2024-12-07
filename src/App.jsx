import React, { createContext, useContext, useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const AuthContext = createContext();

const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (response) => {
    // Implement login logic here
    setIsAuthenticated(true); // Update authentication status
  };

  const logout = () => {
    setIsAuthenticated(false); // Reset authentication status
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const ProtectedRoute = ({ element, ...props }) => {
  const { isAuthenticated } = useAuth(); // Check authentication status

  if (!isAuthenticated) {
    return <Navigate to="/fb" />;
  }

  return element;
};

function App() {
  const clientId =
    "931880666628-lsoqfia38il4ukjce9fqnsovpa1725ad.apps.googleusercontent.com"; // Paste your Client ID here

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AuthProvider>
        {" "}
        {/* Provide auth context to the whole app */}
        <BrowserRouter>
          <Routes>
            <Route path="fb" element={<LoginPage />} />
            <Route
              path="dashboard"
              element={<ProtectedRoute element={<Dashboard />} />}
            />
            <Route path="*" element={<NoRouteFound />} />{" "}
            {/* Catch all unmatched paths */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

function NoRouteFound() {
  return <div>No route found</div>;
}

export default App;
