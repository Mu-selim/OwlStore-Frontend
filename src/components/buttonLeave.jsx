import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { CartContext } from "../contexts/cartContext";
import { WishListContext } from "../contexts/wishListContext";
export const ButtonLeave = ({ handleShowSideMenu }) => {
  const navigate = useNavigate();
  const { setUserAuth } = useContext(AuthContext);
  const { setCart } = useContext(CartContext);
  const { setWishList } = useContext(WishListContext);

  const handleLeave = () => {
    setUserAuth((prev) => ({
      ...prev,
      isAuth: false,
      username: "",
      email: "",
      phone: "",
      userType: "",
    }));
    setCart((prev) => ({
      ...prev,
      items: [],
      total: 0,
    }));
    setWishList((prev) => ({
      ...prev,
      items: [],
    }));
    localStorage.removeItem("user");
    localStorage.removeItem("cart");
    localStorage.removeItem("wishList");
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
