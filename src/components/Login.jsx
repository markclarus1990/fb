import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  //decode the credential

  const handleLoginSuccess = (response) => {
    const decodedToken = jwtDecode(response.credential);
    const userName = decodedToken.given_name;
    const pic = decodedToken.picture;
    console.log("data", decodedToken);
    localStorage.setItem("auth", true);
    localStorage.setItem("user", userName);
    localStorage.setItem("pic", pic);
    localStorage.setItem("author", decodedToken.email);

    login(decodedToken);

    navigate("fb/dashboard"); // Navigate to the dashboard page
  };

  const handleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <>
      <article className="login">
        <section className="login-page">
          <h1>Login to FaceBLog</h1>
          <div className="gl">
            <GoogleLogin
              onSuccess={handleLoginSuccess}
              onError={handleLoginError}
              useOneTap={true} // Optional: for one-tap sign-in
            />
          </div>
        </section>
      </article>
    </>
  );
}

export default LoginPage;
