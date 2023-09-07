import { useState, useEffect, useContext } from "react";
import { HeartIcon } from "../../components/icons/heartIcon";
import { CartIcon } from "../../components/icons/cartIcon";
import { DollarIcon } from "../../components/icons/dollarIcon";
import { ProductArray } from "../../data/ProductArray";
import { ProductCard } from "../../components/productCard";
import { WishBtn } from "../../components/wishBtn";
import { ProductCarousel } from "../../components/productCarousel";
import { Footer } from "../../components/footer";
import { RatingStars } from "../../components/ratingStars";
import { useParams } from "react-router-dom";

import { CartContext } from "../../contexts/cartContext";
import { WishListContext } from "../../contexts/wishListContext";

export function ProductPage() {
  const { cart, setCart } = useContext(CartContext);
  const { wishList, setWishList } = useContext(WishListContext);

  const { id } = useParams();
  const product = ProductArray.filter((product) => {
    if (parseInt(id) === product.id) return product;
  })[0];

  const moreLikeArr = ProductArray.filter((prod) => {
    return prod.category === product.category && prod.gender === product.gender;
  });

  const [productData, setProduct] = useState({
    colors: product.colors,
    sizes: product.sizes,
    name: product.name,
    price: product.price,
    images: product.images,
    imgIndex: 0,
    sizeIndex: 0,
    colorIndex: 0,
    quantity: 1,
  });

  useEffect(() => {
    setProduct({
      ...productData,
      colors: product.colors,
      sizes: product.sizes,
      name: product.name,
      price: product.price,
      images: product.images,
      imgIndex: 0,
      sizeIndex: 0,
      colorIndex: 0,
      quantity: 1,
    });
    window.scrollTo(0, 0);
  }, [product]);

  const changeImg = (event, index) => {
    setProduct({
      ...productData,
      imgIndex: index,
    });
  };

  const sizeChange = (index) => {
    setProduct({
      ...productData,
      sizeIndex: index,
    });
  };
  const colorChange = (index) => {
    setProduct({
      ...productData,
      colorIndex: index,
    });
  };

  const addCart = () => {
    if (productData.quantity === 0) return;

    let size = productData.sizes[productData.sizeIndex];
    let color = productData.colors[productData.colorIndex];
    let quantity = parseInt(productData.quantity);

    let oldQuantity = 0;
    let itemIndex = NaN;
    cart.items.filter((item, index) => {
      if (item.id === product.id) itemIndex = index;
    });

    if (!isNaN(itemIndex)) {
      oldQuantity = cart.items[itemIndex].quantity;
    }

    let cartProduct = {
      ...product,
      sizes: size,
      colors: color,
      quantity: oldQuantity + quantity,
    };
    if (!isNaN(itemIndex)) cart.items[itemIndex] = cartProduct;
    else cart.items.push(cartProduct);

    cart.total = cart.total + product.price * quantity;
    setCart({
      ...cart,
      cart: cart.items,
      total: cart.total,
    });
    console.log(cart);
  };

  const addWish = () => {
    if (wishList.includes(product)) return;
    wishList.push(product);
    setWishList(wishList);
  };
  return (
    <>
      <div>
        <div className="product-path">
          <p className="text-gray-400 ml-6 w-3/4 capitalize">{`Product > ${product.gender} > ${product.category}`}</p>
        </div>
        <div className="product-details-container w-full my-auto mb-12 px-5 py-3 md:flex">
          <div className="images-container md:h-[calc(100vh-66px)] float-right md:w-1/2 flex item-center justify-center mb-3">
            <div className="small-image flex-col justify-center items-center px-1 w-1/4">
              {productData.images.map((img, index) => {
                return (
                  <img
                    key={index}
                    className={
                      "rounded-xl h-1/6 flex-shrink-0 my-3 mx-auto " +
                      (index === productData.imgIndex
                        ? "border-2 border-primary animate-pulse "
                        : " ")
                    }
                    src={img}
                    onMouseEnter={(e) => changeImg(e, index)}
                  />
                );
              })}
            </div>
            <div className="main-image flex flex-shrink-0  mb-5 w-3/4 ">
              <img
                className="rounded-lg h-5/6 lg:h-4/6 md:h-4/6 xl:h-5/6 transition-all"
                src={productData.images[productData.imgIndex]}
              />
            </div>
          </div>

          <div className="details md:float-left md:w-1/2 px-6  text-primary">
            <div className="">
              <h1 className="text-2xl font-bold tracking-tight ">
                {productData.name}
              </h1>
              <h1 className="font-bold mt-2 text-gray-400"> {product.brand}</h1>
              <div className="md:p-5">
                <div className="rating">
                  <div className="flex items-center space-x-1">
                    <RatingStars rating={product.rating} />
                  </div>
                </div>
                <div className="price my-5">
                  <h1 className="md:text-6xl text-3xl font-semibold tracking-tight flex items-center">
                    <div className="w-16">
                      <DollarIcon />
                    </div>
                    {productData.price}
                  </h1>
                </div>

                <div className="quantity flex my-4 flex-col">
                  <h3 className="mr-6 mb-3">Color </h3>
                  <div>
                    {productData.colors.map((color, index) => {
                      return (
                        <button
                          key={index}
                          className={
                            "rounded-full border-2 border-gray-500 w-10 h-10 mx-2 " +
                            (index === productData.colorIndex
                              ? "border-yellow-light border-4 opacity-75"
                              : "")
                          }
                          value={color}
                          onClick={() => colorChange(index)}
                          style={{ backgroundColor: color }}
                        ></button>
                      );
                    })}
                  </div>
                </div>
                <div className="quantity flex my-4 flex-col">
                  <h3 className="mr-6 mb-3">size </h3>
                  <div className="">
                    {productData.sizes.map((size, index) => {
                      return (
                        <button
                          key={index}
                          className={
                            "bg-secondary w-16 h-10 rounded mx-3 font-bold mb-3 " +
                            (index === productData.sizeIndex
                              ? "border-primary border-2 opacity-75"
                              : "")
                          }
                          onClick={() => sizeChange(index)}
                          value={size}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                  <a
                    className="text-xs font-bold underline-offset-1 underline w-16"
                    href="#"
                  >
                    size chart
                  </a>
                </div>
                <div className="quantity flex my-8">
                  <h3 className="mr-6">Quantity</h3>
                  <input
                    className="px-1 rounded text-primary border-2 border-primary w-12 text-center focus:outline-yellow-light"
                    type="number"
                    onChange={(e) => {
                      setProduct({
                        ...productData,
                        quantity: e.target.value,
                      });
                    }}
                    value={productData.quantity}
                    style={{ caretColor: "transparent" }}
                    min={1}
                  />
                </div>
                <div className="flex justify-start my-5">
                  <button
                    className="bg-primary text-secondary rounded-lg py-3 px-5 mr-3 w-2/3 flex justify-center items-center transition-transform hover:scale-95"
                    onClick={addCart}
                  >
                    <div className="w-8 h-8 inline-block mr-2">
                      <CartIcon color={"#f2f0ea"} />
                    </div>
                    Add To Cart
                  </button>
                  
                  <WishBtn product={product} iconSize={8} py={2} px={3}/>
                  
                </div>
              </div>
              <div className="my-5">
                <h4 className="mb-2">Details </h4>
                <p className="text-gray-400 ml-6 w-3/4">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-6">
        <div>
          <p className="text-gray-400 ml-6 w-3/4">More Like </p>
        </div>
        <div className="more-like-container ">
          <ProductCarousel items={moreLikeArr} />
        </div>
      </div>
      <Footer />
    </>
  );
}
