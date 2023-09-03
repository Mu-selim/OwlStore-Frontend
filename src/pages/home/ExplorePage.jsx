import { ProductArray } from "../../data/ProductArray"
import { ProductCard } from "../../components/ProductCard"
import { Footer } from "../../components/Footer"
import { useState} from "react"
export function ExplorePage(){

    

    const [exploreObject,setExploreObject] = useState({
       array : ProductArray,
       searchTxt : '' ,
       category : '',
       gender:''
    })

    let categoriesArr = [...new Set(ProductArray.map((product)=>{
        return product.category;
    }))];

    let matchRule = (str, rule)=>{
        var escapeRegex = (str) => str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        return new RegExp("^" + rule.split("*").map(escapeRegex).join(".*") + "$").test(str);
    }
    
    const inputChange = (event)=>{
        exploreObject.searchTxt = event.target.value;
        let SearchArr = ProductArray.filter((product)=>{
            return matchRule(product.name.toLowerCase(), "*"+exploreObject.searchTxt.toLowerCase()+"*")
        })
        
        setExploreObject({
            ...exploreObject,
            searchTxt:exploreObject.searchTxt,
            array : SearchArr
        })
        
    }

    const categoryChange = (event)=>{
        exploreObject.category = event.target.value;
        let filteredArr = ProductArray.filter((product)=>{
            return (product.category === exploreObject.category);
        })
        if(event.target.value =="") filteredArr = ProductArray
        setExploreObject({
            ...exploreObject,
            category:exploreObject.category,
            array : filteredArr
        })
    }
    const genderChange = (event)=>{
        exploreObject.gender = event.target.value;
        let filteredArr = ProductArray.filter((product)=>{
            return (product.gender === exploreObject.gender);
        })
        
        if(event.target.value =="") filteredArr = ProductArray
        setExploreObject({
            ...exploreObject,
            category:exploreObject.gender,
            array : filteredArr
        })
    }
    return(
        <>
            <div className="p-5">
                <div className="search-filer-container w-full border-b-2 py-4 flex flex-col gap-4 md:flex-row ">
                    <div className="search container md:w-2/3">
                        <input className="w-full border-2 p-1 text-lg rounded-lg shadow-lg" 
                        name="searchTxt"
                        value={exploreObject.searchTxt} 
                        onChange={inputChange} 
                        placeholder="Search"/>
                    </div>
                    <div className="filter ml-2 text-yellow-light text-xl flex justify-end items-center md:w-1/3 md:self-center md:justify-self-end">
                        <label className="w-1/3">Filter By:</label>
                        <select value={exploreObject.category} onChange={categoryChange} className="border-0 font-semibold outline-none w-1/3 p-2 rounded-lg">
                            <option className=" text-gray-500" value={""}> Category </option>
                            {
                                categoriesArr.map((category,index)=>{
                                    return(
                                        <option key={index}>{category}</option>
                                    );
                                })
                            }
                        </select>
                        <select value={exploreObject.gender} onChange={genderChange} className="border-0 outline-none font-semibold w-1/3 p-2 rounded-lg">
                            <option className=" text-gray-500" value={""}> Gender </option>
                            <option >male</option>
                            <option >female</option>
                            <option >uni</option>
                        </select>
                    </div>
                </div>

                <div className="products-show flex flex-row flex-wrap my-1 mx-auto pt-5 gap-6">
                    {exploreObject.array.map((product)=>{
                        return(
                            <ProductCard key={product.id} product={product}/>
                        )
                    })}
                </div>
            </div>
            <Footer/>
        </>
    )
}