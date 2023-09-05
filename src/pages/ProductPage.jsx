import { useState, useEffect } from "react";
import { HeartIcon } from "../components/icons/heartIcon";
import { CartIcon } from "../components/icons/cartIcon";
import { DollarIcon } from "../components/icons/dollarIcon";
import { ProductArray } from "../data/ProductArray";
import { ProductCard } from "../components/ProductCard";
import { Footer } from "../components/Footer";
import { useParams} from "react-router-dom";
export function ProductPage(){
    
    let { id } = useParams();
    const product = ProductArray.filter((product)=>{
        if(parseInt(id)===product.id) return product;
    })[0];
    
    const [productData, setProduct ] = useState({
        
        colors : product.colors,
        sizes : product.sizes,
        name : product.name,
        price : product.price,
        images : product.images,
        imgIndex : 0,
        sizeIndex : 0,
        colorIndex: 0,
        quantity : 1 
    })

    useEffect(()=>{
        setProduct({
            ...productData,
            colors : product.colors,
            sizes : product.sizes,
            name : product.name,
            price : product.price,
            images : product.images,
            imgIndex : 0,
            sizeIndex : 0,
            colorIndex: 0,
            quantity : 1 
            
        })
    },[product])

    const changeImg = (event, index)=>{
        setProduct({
            ...productData,
            imgIndex: index
        })
    }

    const sizeChange = (index)=>{
        setProduct({
            ...productData,
            sizeIndex: index
        })
    }
    const colorChange = (index)=>{
        setProduct({
            ...productData,
            colorIndex: index
        })
    } 

    const addCart = ()=>{
        if (productData.quantity === 0) return;
        let productBuyInfo = {
            size : productData.sizes[productData.sizeIndex],
            color: productData.colors[productData.colorIndex],
            quantity : productData.quantity 
        }
        console.log(productBuyInfo);
    }

    return (
        <>
        <div >

            <div className="product-path">
                <p className="text-gray-400 ml-6 w-3/4 capitalize">{`Product > ${product.gender} > ${product.category}`}</p>
            </div>
            <div className="product-details-container w-full my-auto p-5 md:flex">

                <div className="images-container float-right md:w-1/2 flex-col align-middle justify-center mb-3">
                    <div className="main-image flex justify-center mb-5">
                        <img className="rounded-lg w-3/5" src={productData.images[productData.imgIndex]}/>
                    </div>
                    <div className="small-image flex justify-center px-1 mb-3">
                        {productData.images.map((img, index)=>{
                            return(
                            <img key={index} 
                            className={"rounded-xl w-1/6 mx-3 " + (index === productData.imgIndex? "border-2 border-primary animate-pulse ": " ")}
                                src={img} 
                                onMouseEnter = {e => changeImg(e, index)}
                                />
                            )
                        })}
                    </div>
                </div>

                <div className="details md:float-left md:w-1/2 px-6 h-[calc(100vh-66px)]  text-primary">
                    <h1 className="text-2xl font-bold tracking-tight ">{productData.name}</h1>
                    <div className="md:p-5">
                        <div className="rating">
                            <div className="flex items-center space-x-1">
                                <svg className="w-4 h-4 text-yellow-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-yellow-light" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <svg className="w-4 h-4 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="text-gray-400 text-sm">(20)</p>
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
                                {productData.colors.map((color, index)=>{
                                    return(
                                        <button key={index}
                                        className={"rounded-full border-2 border-gray-500 w-10 h-10 mx-2 " + (index === productData.colorIndex? "border-yellow-light border-4 opacity-75":"")}
                                        value={color}
                                        onClick={()=> colorChange(index)}
                                        style={{backgroundColor:color}}></button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="quantity flex my-4 flex-col">
                            <h3 className="mr-6 mb-3">size </h3>
                            <div className="">
                                {
                                    productData.sizes.map((size, index) =>{
                                        return(
                                            <button key={index} 
                                            className={"bg-secondary w-20 h-10 rounded mx-3 font-bold mb-3 " + (index === productData.sizeIndex? "border-primary border-2 opacity-75":"")} 
                                            onClick={()=> sizeChange(index)}
                                            value={size}>{size}</button>
                                        )
                                    })
                                }
                               
                            </div>
                            <a className="text-xs font-bold underline-offset-1 underline w-16" href="#">size chart</a>
                        </div>
                        <div className="quantity flex my-8">
                            <h3 className="mr-6">Quantity</h3>
                            <input 
                            className="px-1 rounded text-primary border-2 border-primary w-12 text-center focus:outline-yellow-light" 
                            type="number" 
                            onChange={(e)=>{
                                setProduct({
                                    ...productData,
                                    quantity: e.target.value
                                })
                            }}
                            value={productData.quantity}
                            style={{caretColor: "transparent"}}
                            min={1} />
                        </div>
                        <div className="flex justify-start my-5">
                            <button className="bg-primary text-secondary rounded-lg py-3 px-5 mr-3 font-normal w-2/3 flex justify-center items-center" onClick={addCart}>
                                <div className="w-8 h-8 inline-block mr-2">
                                    <CartIcon color={"#f2f0ea"}/>
                                </div>
                                
                                Add To Cart
                            </button>
                            <button className="bg-secondary text-primary rounded-lg  py-2 px-3 font-bold">
                                <div className="w-8 h-8">
                                    <HeartIcon color={"#010101"}/>
                                </div>

                            </button>
                        </div>
                        <div className="my-5">
                            <h4 className="mb-2">Details </h4>
                            <p className="text-gray-400 ml-6 w-3/4">{product.description}</p>
                        </div>
                            
                    </div>
                </div>

            </div>
        </div>
        <div className="my-6">
            <div>
                <p className="text-gray-400 ml-6 w-3/4">More Like </p>
            </div>
            <div className="more-like-container flex flex-row flex-wrap">
                <ProductCard product = {ProductArray[1]}/>
                <ProductCard product = {ProductArray[2]}/>
                <ProductCard product = {ProductArray[3]}/>
                
            </div>
        </div>
        <Footer/>
        </>
    )

}