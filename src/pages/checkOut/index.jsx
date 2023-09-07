import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";

import { Address } from "./address";
import { Payment } from "./payment";

export const CheckOut = ()=>{
    const [stage, setStage] = useState(1);
    const [address,setAddress] = useState({})
    const [card, setCard] = useState({});
    const { cart, setCart } = useContext(CartContext);

    const changeStage = (address)=>{
        setAddress({
            ...address
        })
        if(stage === 1) setStage(2);   
    }
    const pervStage = ()=>{
        if(stage === 2) setStage(1);
    }

    const Checkout = (cardInfo)=>{
        setCard(cardInfo)
        console.log(card)
        console.log(address)
    }
    return(
        <>
            <div className="flex flex-col p-5">
                <div className="check-out flex-col justify-center items-center">
                    <h1 className=" text-2xl font-bold border-b-4 inline-block self-center">Check Out</h1>
                    <div className="steps flex justify-evenly">
                        <h1 className="m-5 font-bold text-xl"> <span className={(stage ===1 ? "bg-yellow-light":"bg-secondary")+" p-2 px-4 rounded-full mr-2"}>1</span> Address</h1>
                        <h1 className="m-5 font-bold text-xl"> <span className={(stage ===2 ? "bg-yellow-light":"bg-secondary")+" p-2 px-4 rounded-full mr-2"}>2</span> Payment</h1>
                    </div>

                    {stage === 1? <Address changeStage={changeStage}/>: <Payment pervStage={pervStage} chekOutFunction={Checkout}/>}
                    
                    
                    
                </div>
                <div className="my-cart border-t-2 py-2 flex flex-col">
                    <h1 className="font-extrabold text-xl mb-5">My Cart</h1>
                    {cart.items.map((product, index)=>{
                        return(
                            <div key={index} className="cart-item bg-secondary my-2 rounded-lg p-2">
                                <h1 className="font-bold">{product.name}</h1>
                                <div className="flex gap-7">
                                    <p>Price: ${product.price}</p>
                                    <p>Quantity: {product.quantity}</p>
                                </div>
                            </div>                
                        )
                    })}
                    <p className=" font-extrabold text-xl self-end">Total : ${cart.total}</p>
                </div>
            </div>
        </>
    )
}