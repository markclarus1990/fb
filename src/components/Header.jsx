import "./Header.css";
import "../../src/index.css";
import { useAuth } from "../context/AuthContext";
function Header() {
  const { user, logout, pic } = useAuth();
  console.log(pic);
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              {" "}
              <img src={pic} alt="pic" /> {user}
            </li>
            <div className="links">
              <li>
                <a href="">Post</a>
              </li>
              <li>
                <a href="">Messages</a>
              </li>
              <li>
                <button onClick={() => logout()}>Logout</button>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
