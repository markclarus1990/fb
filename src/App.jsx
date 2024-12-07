import { GoogleOAuthProvider } from "@react-oauth/google";
import LoginPage from "./Login";
function App() {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="App">
        <LoginPage />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
