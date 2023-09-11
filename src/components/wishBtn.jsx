import { HeartIcon } from "./icons/heartIcon";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../contexts/wishListContext";

export const WishBtn = ({
  product,
  width,
  py,
  px,
  iconSize,
  updateCarousel,
}) => {
  let { wishList, setWishList } = useContext(WishListContext);

  const [wished, setWished] = useState(false);

  const checkExist = (prod) => {
    let flag = false;
    wishList.forEach((wish) => {
      if (wish.id === prod.id) flag = true;
    });
    return flag;
  };

  useEffect(() => {
    if (checkExist(product)) setWished(true);
    else setWished(false);
  }, [wishList, product]);

  const addWish = () => {
    if (checkExist(product)) {
      wishList.splice(wishList.indexOf(product), 1);
      setWished(false);
    } else {
      wishList.push(product);
      setWished(true);
    }
    setWishList(wishList);
    localStorage.setItem("wishList", JSON.stringify(wishList));
    if (updateCarousel) updateCarousel();
  };
  return (
    <>
      <button
        className={`bg-secondary rounded-lg w-${width} py-${py} px-${px} flex justify-center items-center transition-transform hover:scale-95`}
        onClick={addWish}
      >
        <div className={`w-${iconSize}`}>
          <HeartIcon color={wished ? "#edcf5d" : "#010101"} />
        </div>
      </button>
    </>
  );
};
