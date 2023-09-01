import { DollarIcon } from "./icons/dollarIcon";
import { CartIcon } from "./icons/cartIcon";
import { HeartIcon } from "./icons/heartIcon";

export function ProductCard(props){
    const product = props.product;
    
    return(
        <>
            <div className="card-container ">

                <div className="card-image w-48 h-40">
                    <img className=" object-cover object-top w-48 h-40 " src={product.images[0]}/>
                </div>

                <div className="card-context m-1 h-10">
                    <p className=" text-sm font-bold">{product.name}</p>
                </div>

                <div className="card-footer mt-2 h-8 flex mx-1 border-t-2 pt-2">
                    <div className="price flex items-center w-1/3 ">
                        <div className="w-5">
                            <DollarIcon/>
                        </div>
                        <p className=" text-lg font-bold">{product.price}</p> 
                    </div>
                    <div className="card-buttons w-2/3 flex justify-center items-center">
                        <button className="bg-secondary rounded-lg w-2/5  py-1 flex justify-center items-center ">
                            <div className="w-6">
                                <HeartIcon color={"#010101"}/>
                            </div>
                        </button>
                        <button className="bg-primary py-1 flex justify-center items-center ml-2  rounded-lg w-2/5 ">
                            <div className="w-6">
                                <CartIcon color={"#f2f0ea"}/>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}