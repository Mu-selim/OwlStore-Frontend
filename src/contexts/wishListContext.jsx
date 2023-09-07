import { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(()=>{
    const getWish = localStorage.getItem("wishList");
    if (getWish) {
      setWishList((prev) => ({
        ...prev,
        ...JSON.parse(getWish),
      }));
    } else {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  },[wishList])

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
