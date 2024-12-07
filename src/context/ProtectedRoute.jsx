import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/fb/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}
