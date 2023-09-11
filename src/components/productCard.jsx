import { DollarIcon } from "./icons/dollarIcon";
import { CartIcon } from "./icons/cartIcon";
import { WishBtn } from "./wishBtn";
import { useNavigate } from "react-router-dom";

import { useContext } from "react";
import { CartContext } from "../contexts/cartContext";

export function ProductCard({ product, updateCarousel }) {
  const { cart, setCart } = useContext(CartContext);
  const Navigate = useNavigate();

  const clickProduct = () => {
    Navigate(`/product/${product.id}`);
  };

  const addToCart = () => {
    let size = product.sizes[0];
    let color = product.colors[0];
    let quantity = 1;

    let itemIndex = NaN;
    cart.items.filter((item, index) => {
      if (item.id === product.id) itemIndex = index;
    });

    if (!isNaN(itemIndex)) return;

    let cartProduct = {
      ...product,
      sizes: size,
      colors: color,
      quantity: quantity,
    };
    cart.items.push(cartProduct);

    cart.total = cart.total + product.price * quantity;
    setCart({
      ...cart,
      cart: cart.items,
      total: cart.total,
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div className="card-container ">
        <div className=" cursor-pointer" onClick={clickProduct}>
          <div className="card-image w-48 h-40">
            <img
              className=" object-cover object-top w-48 h-40 "
              src={product.images[0]}
            />
          </div>

          <div className="card-context m-1 h-10">
            <p className=" text-sm font-bold">{product.name}</p>
          </div>
        </div>

        <div className="card-footer mt-2 h-8 flex mx-1 border-t-2 pt-2">
          <div className="price flex items-center w-1/3 ">
            <div className="w-5">
              <DollarIcon />
            </div>
            <p className=" text-lg font-bold">{product.price}</p>
          </div>
          <div className="card-buttons w-2/3 flex justify-center items-center">
            <WishBtn
              product={product}
              py={1}
              width={"2/5"}
              iconSize={6}
              updateCarousel={updateCarousel}
            />

            <button
              className="bg-primary py-1 flex justify-center items-center ml-2  rounded-lg w-2/5 transition-transform hover:scale-95"
              onClick={addToCart}
            >
              <div className="w-6">
                <CartIcon color={"#f2f0ea"} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
