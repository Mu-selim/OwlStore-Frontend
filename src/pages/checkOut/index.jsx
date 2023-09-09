import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cartContext";
import { XIcon } from "../../components/icons/xIcon";
import { Address } from "./address";
import { Payment } from "./payment";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

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

    const sendEmail = (emailTemplate) => {
        
        emailjs.send('service_taq14kj', 'template_hr6hram', emailTemplate, 'WtKR9EeJOp1BnzwIz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

    const orderInString = (products)=>{
        let string = "\n";

        products.map((product)=>{
            string += `${product.name}  ,color:${product.colors}  ,size:${product.sizes}  ,quantity:${product.quantity} \n`;
        })

        return string;
    }
    const Checkout = (cardInfo)=>{

        

        setCard(cardInfo)
        const emailTemplate = {
            user_name : "kareem",
            email : "kooooookokhalaf11@gmail.com",
            card_name: card.cardName,
            card_number : card.cardNumber.substring(0,4) + "**** **** ****",
            order_id : Math.floor(Math.random()*10000),
            address : `Apartment ${address.apartment}, building ${address.building}, ${address.street}, ${address.city}`,
            total : '$'+ cart.total,
            order : orderInString(cart.items)
        }
        
        sendEmail(emailTemplate)
        
    }

    const deleteItem = (index)=>{
        cart.total = cart.total - (cart.items[index].price * cart.items[index].quantity)
        cart.items.splice(index,1);
        setCart({
            ...cart,
            items: cart.items,
            total: cart.total
        })
        console.log(cart)
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    return(
        <>
            <div className="flex flex-col p-5 md:flex-row md:h-[calc(100vh-66px)] ">
                <div className="check-out flex-col justify-center items-center flex-grow md:p-10  md:w-2/3">
                    <h1 className=" text-2xl font-bold border-b-4 inline-block self-center md:text-4xl md:border-b-0 md:mb-5">Check Out</h1>
                    <div className="steps flex justify-evenly md:justify-center">
                        <h1 className="m-5 font-bold text-xl"> <span className={(stage ===1 ? "bg-yellow-light":"bg-secondary")+" p-2 px-4 rounded-full mr-2"}>1</span> Address</h1>
                        <h1 className="m-5 font-bold text-xl"> <span className={(stage ===2 ? "bg-yellow-light":"bg-secondary")+" p-2 px-4 rounded-full mr-2"}>2</span> Payment</h1>
                    </div>

                    {stage === 1? <Address changeStage={changeStage}/>: <Payment pervStage={pervStage} checkOutFunction={Checkout}/>}
                    
                    
                    
                </div>
                <div className="my-cart border-t-2 py-2 flex flex-col md:border-l-2 md:border-t-0 px-5 md:w-1/3 rounded-lg shadow-md">
                    <h1 className="font-extrabold text-xl mb-5">My Cart</h1>
                    {cart.items.map((product, index)=>{
                        return(
                            <div key={index} className="cart-item bg-secondary my-2 rounded-lg p-2">
                                <div className="float-left">
                                    <Link to={`/product/${product.id}`} className="font-bold hover:opacity-80">{product.name}</Link>
                                    <div className="flex gap-7">
                                        <p>Price: ${product.price}</p>
                                        <p>Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                                <button className="float-right hover:animate-spin"
                                onClick={()=>deleteItem(index)}>
                                    <div className="w-8">
                                        <XIcon color={"#010101"}/>
                                    </div>
                                </button>
                            </div>                
                        )
                    })}
                    <p className=" font-extrabold text-xl self-end">Total : ${cart.total}</p>
                </div>
            </div>
        </>
    )
}