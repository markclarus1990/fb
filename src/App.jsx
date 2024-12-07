import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./components/Login";
import Dashboard from "./components/Dashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const clientId =
    "931880666628-lsoqfia38il4ukjce9fqnsovpa1725ad.apps.googleusercontent.com"; // Paste your Client ID here

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}>
            <Route index element={<Navigate replace to="fb" />} />
            <Route path="/fb" element={<LoginPage />} />

            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
