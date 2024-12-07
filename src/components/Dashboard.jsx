import "./Dashboard.css";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <>
      <Header />
    </>
  );
}

export default Dashboard;
