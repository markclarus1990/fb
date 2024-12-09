import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
const AuthContext = createContext();

const initialState = {
  user: localStorage.getItem("user"),
  isLoading: false,
  isAuthenticated: localStorage.getItem("auth"),
  pic: localStorage.getItem("pic"),
  data: localStorage.getItem("author"),
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: localStorage.getItem("user"),
        isAuthenticated: localStorage.getItem("auth"),
        pic: localStorage.getItem("pic"),
        data: localStorage.getItem("author"),
      };
    case "logout":
      return { initialState };
  }
}

function AuthProvider({ children }) {
  const [{ data, user, pic, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(data) {
    dispatch({ type: "login", payload: data });
  }
  function logout() {
    dispatch({ type: "logout" });
    localStorage.removeItem("user");
    localStorage.removeItem("auth");
    localStorage.removeItem("pic");
    localStorage.getItem("author");
  }

  return (
    <AuthContext.Provider
      value={{ data, user, login, logout, pic, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("Context was used outside the AutProvider");

  return context;
}

export { AuthProvider, useAuth };
