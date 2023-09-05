import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
export const ButtonLeave = ({ handleShowSideMenu }) => {
  const navigate = useNavigate();
  const { setUserAuth } = useContext(AuthContext);

  const handleLeave = () => {
    setUserAuth((prev) => ({
      ...prev,
      isAuth: false,
      username: "",
      email: "",
      phone: "",
      userType: "",
    }));
    localStorage.removeItem("user");
    if (handleShowSideMenu) handleShowSideMenu();
    navigate("/");
  };

  return (
    <button
      className="px-3 py-1 border border-primary rounded-md transition-custom hover:bg-primary hover:text-secondary"
      onClick={handleLeave}
    >
      Leave
    </button>
  );
};
