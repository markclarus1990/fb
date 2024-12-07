import { GoogleLogin } from "@react-oauth/google";
import "./Login.css";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const handleLoginSuccess = (response) => {
    console.log("Login Successful:", response);
    // Here, you would send the token to your backend to verify and log the user in
    // For example: send the response.credential to your server for authentication

    navigate("/dashboard"); // Navigate to the dashboard page
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
