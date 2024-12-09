import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import FORM from "../ui/Form";

function Dashboard() {
  const { user, logout } = useAuth();
  return (
    <>
      <div className="dashboard">
        <Header />
        <FORM />
      </div>
    </>
  );
}

export default Dashboard;
