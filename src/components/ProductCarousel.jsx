import { useState } from 'react'
import { ProductCard } from "./ProductCard";
import { Arrow } from "./icons/Arrow";

export const ProductCarousel = ({items})=>{
    const [offset, setOffset] = useState(0)
    
    const scrollRight = ()=>{
        let productsPerRow =  Math.floor(window.innerWidth/(16*16)) + 1 ;
        if(offset < ((items.length-productsPerRow)*-16)) return;
        let newOffset = offset - 16;
        setOffset(newOffset)
    }
    const scrollLeft = ()=>{
        if(offset === 0) return;
        let newOffset = offset + 16;
        setOffset(newOffset)
    }
    return(
        <>
            <div className="carousel">
                <div className="carousel-buttons ">
                    <button className="carousel-btn h-full bg-transparent rounded-lg top-0 absolute left-0 hover:bg-secondary hover:opacity-60 z-50"
                    onClick={scrollLeft}>
                    <div className="w-10">
                        <Arrow color={"gray"}/>
                    </div>
                    </button>
                </div>
                <div className="carousel-items flex h-full items-center transition-all delay-125"
                    style={{transform:`translateX(${offset-1.55}rem)` }}>
                    {items.map((prod, index)=>{
                            return(
                                <div key={index} className= {`min-w-fit`}>
                                    <ProductCard key={index} product={prod} />
                                </div>
                            )
                        
                        })
                    }
                </div>
                <div className="carousel-buttons">
                    <button className="carousel-btn h-full bg-transparent rounded-lg rotate-180 top-0 absolute right-0 hover:bg-secondary hover:opacity-60 z-50"
                    onClick={scrollRight}><div className="w-10">
                        <Arrow color={"gray"}/>
                    </div>
                    </button>
                </div>
            </div>
        </>
    )
}