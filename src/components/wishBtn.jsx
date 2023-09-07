import { HeartIcon } from "./icons/heartIcon";
import { useContext, useEffect, useState } from "react";
import { WishListContext } from "../contexts/wishListContext";

export const WishBtn = ({product, width, py, px, iconSize})=>{
    let { wishList, setWishList } = useContext(WishListContext);

    const [wished, setWished] = useState(false);

    useEffect(()=>{
        if(wishList.includes(product)) setWished(true);
        else setWished(false)

    },[wishList, product])
    const addWish = ()=>{
        if(wishList.includes(product)){
            wishList.splice(wishList.indexOf(product),1);
            setWishList(wishList)
            setWished(false);
            return;
        }
        wishList.push(product);
        setWished(true);
        setWishList(wishList);
    }
    return(
        <>
            <button className={`bg-secondary rounded-lg w-${width} py-${py} px-${px} flex justify-center items-center transition-transform hover:scale-95`}
            onClick={addWish}>
                <div className={`w-${iconSize}`}>
                    <HeartIcon color={ wished ?"#edcf5d":"#010101"}/>
                </div>
            </button>
        </>
    )
}