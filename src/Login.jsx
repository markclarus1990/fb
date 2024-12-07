import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
  const handleLoginSuccess = (response) => {
    console.log("Login Successful:", response);
    // Here, you would send the token to your backend to verify and log the user in
    // For example: send the response.credential to your server for authentication
  };

  const handleLoginError = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div className="login-page">
      <h1>Login to FaceBLog</h1>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
        useOneTap={true} // Optional: for one-tap sign-in
      />
    </div>
  );
}

export default LoginPage;
