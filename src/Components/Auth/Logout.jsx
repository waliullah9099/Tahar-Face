import { useNavigate } from "react-router-dom";
import logout from "../../assets/icons/logout.svg";

export default function Logout() {
  const navigate = useNavigate();
  const handleLogout = () => {
    console.log("click logout button");

    navigate("/login");
  };
  return (
    <>
      <button onClick={handleLogout} className="icon-btn">
        <img src={logout} alt="logout" />
      </button>
    </>
  );
}
