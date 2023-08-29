import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../contexts/cartContext";
import { OwlIcon } from "./icons/owlIcon";
import { CartIcon } from "./icons/cartIcon";

const NavCart = ({ cart }) => {
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => setShowCart(!showCart);

  return (
    <div className="relative">
      <div className="w-8 cursor-pointer" onClick={handleShowCart}>
        <CartIcon color="#010101" />
      </div>
      <span className="absolute -right-1 -top-[0.6rem] text-sm">
        {cart.items.length}
      </span>
      {showCart && (
        <div className="absolute top-10 right-0 w-80 rounded-md bg-purple-300">
          <div className="w-full px-4 py-2 border-b-2 flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-6">
                <CartIcon color="#010101" />
              </div>
              <h2 className="font-bold">Cart</h2>
            </div>
            <div>
              <span>Total:</span>
              <span>{cart.total}$</span>
            </div>
          </div>
          <ul className="w-full px-4 py-2 border-b-2 h-20"></ul>
          <div className="w-full p-4 flex">
            <Link
              to="/checkout"
              className="w-full px-4 py-2 text-center transition border border-primary rounded-md hover:bg-primary hover:text-secondary"
            >
              Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const { cart } = useContext(CartContext);

  return (
    <nav className="flex justify-between items-center px-4 py-4 md:px-8 bg-secondary">
      <div>
        <div className="w-12">
          <Link to="/">
            <OwlIcon />
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-8">
        <ul className="flex font-bold gap-6">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Explore
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <NavCart cart={cart} />
        <div className="flex justify-center items-center gap-4 font-bold">
          <Link to="/" className="">
            Sign In
          </Link>
          <Link
            to="/"
            className="px-3 py-1 border border-primary rounded-md transition hover:bg-primary hover:text-secondary"
          >
            Join
          </Link>
        </div>
      </div>
    </nav>
  );
};
