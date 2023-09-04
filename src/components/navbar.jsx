import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";
import { CartContext } from "../contexts/cartContext";
import { OwlIcon } from "./icons/owlIcon";
import { BurgerMenu } from "./burgerMenu";
import { NavCart } from "./navCart";
import { SideMenuProvider } from "../contexts/sideMenuContext";
import { SideMenu } from "./sideMenu";

export const Navbar = () => {
  const { userAuth } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <SideMenuProvider>
      <nav className="relative flex justify-between items-center px-4 py-4 md:px-8 bg-secondary">
        <SideMenu />
        <div className="flex items-center gap-4">
          <BurgerMenu />
          <div className="w-12">
            <Link to="/">
              <OwlIcon />
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center gap-8">
          <ul className="font-bold gap-6 hidden sm:flex">
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/explore" className="nav-link">
                Explore
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          <NavCart cart={cart} />
          {userAuth.isAuth ? (
            <div>
              <Link to="/dashboard" className="nav-link">
                {userAuth.username}
              </Link>
            </div>
          ) : (
            <div className="flex justify-center items-center gap-4 font-bold">
              <Link to="/signin" className="">
                Sign In
              </Link>
              <Link
                to="/join"
                className="px-3 py-1 border border-primary rounded-md transition hover:bg-primary hover:text-secondary"
              >
                Join
              </Link>
            </div>
          )}
        </div>
      </nav>
    </SideMenuProvider>
  );
};
