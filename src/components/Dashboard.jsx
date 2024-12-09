import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";
import Header from "./Header";
import FORM from "../ui/Form";
import FEED from "./FEED";
import { getBlogs } from "../services/Blogs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

function Dashboard() {
  const { user, logout } = useAuth();
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["blog"],
    queryFn: getBlogs,
  });

  return (
    <>
      <div className="dashboard">
        <Header />
        <FORM />
        <FEED data={data} />
      </div>
    </>
  );
}

export default Dashboard;
