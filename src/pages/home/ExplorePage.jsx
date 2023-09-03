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

    const filterChange = (event)=>{
        switch (event.target.name){
            case "category":
                exploreObject.category = event.target.value;
                break;
            case "gender":
                exploreObject.gender = event.target.value;
                break;

        }
        let filteredArr = ProductArray;
        if(exploreObject.category!==''){
            filteredArr = filteredArr.filter((product)=>{
                return (product.category === exploreObject.category);
            })
        }
        if(exploreObject.gender!==''){
            filteredArr = filteredArr.filter((product)=>{
                return (product.gender === exploreObject.gender);
            })
        }
        setExploreObject({
            ...exploreObject,
            category:exploreObject.category,
            gender:exploreObject.gender,
            array : filteredArr
        })

    }

    let clearFilter = ()=>{
        setExploreObject({
            searchTxt : '' ,
            category:'',
            gender:'',
            array : ProductArray
        })
    }
    return(
        <>
            <div className="p-5">
                <div className="search-filer-container w-full border-b-2 py-4 flex flex-col items-center gap-4  ">
                    <div className="search container  lg:w-2/3">
                        <input className="w-full border-2 p-1 text-lg rounded-lg shadow-lg outline-yellow-light" 
                        name="searchTxt"
                        value={exploreObject.searchTxt} 
                        onChange={inputChange} 
                        placeholder="Search"/>
                    </div>
                    <div className="filter text-yellow-light text-xl flex justify-center items-center w-full  ">
                        <div className="flex justify-between items-center">
                            <label className="w-1/3">Filter By:</label>
                            <select value={exploreObject.category} name="category" onChange={filterChange} className="border-0 font-semibold outline-none cursor-pointer mx-2  p-2 rounded-lg">
                                <option className=" text-gray-500" value={""}> Category </option>
                                {
                                    categoriesArr.map((category,index)=>{
                                        return(
                                            <option key={index}>{category}</option>
                                        );
                                    })
                                }
                            </select>
                            <select value={exploreObject.gender} name="gender" onChange={filterChange} className="border-0 outline-none font-semibold cursor-pointer mx-2  p-2 rounded-lg">
                                <option className=" text-gray-500" value={""}> Gender </option>
                                <option >male</option>
                                <option >female</option>
                                <option >uni</option>
                            </select>
                        </div>
                        <div className="mx-3">
                            <button className=" bg-yellow-light px-2 py-1 rounded-xl text-primary text-base" onClick={clearFilter}>Clear Filter</button>
                        </div>
                    </div>
                </div>

                <div className="products-show flex flex-row justify-center pt-5  ">
                    <div className="flex flex-wrap justify-evenly w-10/12">   
                        {exploreObject.array.map((product)=>{
                            return(
                                <ProductCard key={product.id} product={product}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}