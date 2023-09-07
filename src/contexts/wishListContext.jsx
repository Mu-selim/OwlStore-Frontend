import { createContext, useEffect, useState } from "react";
import { Product } from "../data/Product"

export const WishListContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);

  useEffect(()=>{
    const getWish = localStorage.getItem("wishList");
  
    if (getWish !== null) {
      setWishList((prev) => (
        JSON.parse(getWish)
      ));
    } else {
      localStorage.setItem("wishList", JSON.stringify(wishList));
    }
  },[setWishList])

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {children}
    </WishListContext.Provider>
  );
};
