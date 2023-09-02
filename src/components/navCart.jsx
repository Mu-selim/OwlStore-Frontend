import { useState } from "react";
import { CartIcon } from "./icons/cartIcon";

export const NavCart = ({ cart }) => {
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
        <div className="absolute top-10 right-0 w-80 rounded-md bg-purple-300 z-40">
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
          {cart.items.length > 0 ? (
            <>
              <ul className="w-full px-4 py-2 border-b-2 max-h-40"></ul>
              <div className="w-full p-4 flex">
                <Link
                  to="/checkout"
                  className="w-full px-4 py-2 text-center transition-custom border border-primary rounded-md hover:bg-primary hover:text-secondary"
                >
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <div className="w-full p-4 flex justify-center items-center">
              <span className="text-sm">Cart is empty</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
