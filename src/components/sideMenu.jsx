import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { SideMenuContext } from "../contexts/sideMenuContext";
import { Link, useNavigate } from "react-router-dom";

export const SideMenu = () => {
  const navigate = useNavigate();
  const { userAuth, setUserAuth } = useContext(AuthContext);
  const { showSideMenu, handleShowSideMenu } = useContext(SideMenuContext);

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
    handleShowSideMenu();
    navigate("/");
  };

  return (
    <menu
      className={
        "z-40 sm:hidden absolute top-0 h-screen pl-4 pr-16 flex flex-col justify-between bg-secondary transition-custom " +
        (showSideMenu ? "left-0" : "-left-80")
      }
    >
      <ul className="font-bold text-xl mt-20 flex flex-col gap-6">
        <li>
          <Link to="/" className="nav-link" onClick={handleShowSideMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/explore" className="nav-link" onClick={handleShowSideMenu}>
            Explore
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link" onClick={handleShowSideMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="nav-link" onClick={handleShowSideMenu}>
            Contact
          </Link>
        </li>
      </ul>
      {userAuth.isAuth && (
        <button
          className="mb-8 px-3 py-1 border border-primary rounded-md transition-custom hover:bg-primary hover:text-secondary"
          onClick={handleLeave}
        >
          Leave
        </button>
      )}
    </menu>
  );
};
