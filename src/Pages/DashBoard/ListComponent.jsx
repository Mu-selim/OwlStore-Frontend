/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
var sort = [
  { name: "name", dsc: 0 },
  { name: "brand", dsc: 0 },
  { name: "category", dsc: 0 },
  { name: "price", dsc: 0 },
];
export let ItemsList=(props)=>{
  let {itemsArrRef}=props;
  let [ShownArr, setShownArr] = useState(itemsArrRef);
  let uniquebrands=[];
  let uniquecategorys=[];
   itemsArrRef.filter((item) =>{ 
    if(!uniquebrands.includes(item.brand))
    uniquebrands.push(item.brand);
      });
      itemsArrRef.filter((item) =>{ 
        if(!uniquecategorys.includes(item.category))
        uniquecategorys.push(item.category);
          });
  let sortByColumn=(prop, index) =>{
    let newArr=[...ShownArr];
    sort[index].dsc = !sort[index].dsc;
    newArr.sort((a, b) => {
      var propA = a[prop],
        propB = b[prop];
      if (typeof propA === "number") {
        return sort[index].dsc ? propA - propB : propB - propA;
      }
      var stringA = a[prop].toLowerCase();
      var stringB = b[prop].toLowerCase();
      if (sort[index].dsc) {
        if (stringA < stringB) return -1;
        if (stringA > stringB) return 1;
      } else {
        if (stringA > stringB) return -1;
        if (stringA < stringB) return 1;
      }
    });
    setShownArr(newArr);
  }
    let Searchfun=()=>{
      let searchbar=document.getElementById("search").value;
        let filteredArr=itemsArrRef.filter((item)=>{
            return item.name.toLowerCase().includes(searchbar);
        })
        setShownArr(filteredArr);
    }
    let filterEmployees=()=>{
       let filteredArr =itemsArrRef.filter(function (item) {
        var _brand = document.getElementById("Brand-filter").value;
        var category = document.getElementById("Category-filter").value;
        var price = document.getElementById("Price-filter").value;
        price = price ? price.split(",").map(Number) : price;
        price = price ? item.price >=price[0] && item.price <= price[1] : true;

        _brand = _brand
          ? item.brand.toUpperCase() === _brand.toUpperCase()
          : true;

        category = category
        ? item.category.toUpperCase() === category.toUpperCase()
        : true;
        return price && _brand && category;
      });
      setShownArr(filteredArr);
    }
    let clearfilters=()=>{
      document.getElementById("Brand-filter").value="";
      document.getElementById("Category-filter").value="";
      document.getElementById("Price-filter").value="";
      setShownArr(itemsArrRef);
    }
     useEffect(()=>{
      setShownArr(ShownArr);
    }) 
    return(
      
       <div>
        <div className="p-1 ">
          <form>   
    <div className="relative ">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input style={{border:"2px solid black"}} type="text" id="search" className="w-full py-2.5 pl-7  text-sm border-3  rounded-2xl" placeholder="Search by Name"
        onChange={Searchfun}/>
    </div>
</form>
        </div>
        <div  className="w-full flex mb-2 justify-end">
        <select
            className="filters"
            name="Brand-filter"
            id="Brand-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Brand</option>
            {uniquebrands.map((item)=>{
              return (<option value={item}>{item}</option>)
            })}
          </select>
          <select
            className="filters  "
            name="Category-filter"
            id="Category-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Category</option>
            {uniquecategorys.map((item)=>{
              return (<option value={item}>{item}</option>)
            })}
          </select>
          <select
            className="filters "
            name="Price-filter"
            id="Price-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Price</option>
            <option value="0,50">0 - 50</option>
            <option value="50,100">50 - 100</option>
            <option value="100,150">100 - 150</option>
            <option value="200,250">200 - 250</option>
            <option value="250,90000">250 - &infin;</option>
          </select>
          <button id="clearfilters" className="btn " onClick={clearfilters}>Clear Filters </button>
        </div>
        <div className="overflow-auto shadow hidden md:block">
      <table className="w-full">
        <thead className="bg-dark border-b-2 border-gray-200 rounded-lg text-white">
        <tr >
          <th className="w-2 p-3 text-sm font-semibold tracking-wide text-left">ID.</th>
          <th className="w-20 text-sm font-semibold tracking-wide text-left">Image</th>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Status</th>
          <th className="p-3 text-sm font-semibold tracking-wide text-left cursor-pointer" 
            onClick={()=>sortByColumn("name",0)}>
              <div className="flex items-center justify-between">
              <span>Name</span> 
                  <span className=" flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span>
              </div>
            </th>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left">Colors</th>
          <th className="p-3 text-sm font-semibold  tracking-wide text-left cursor-pointer" 
            onClick={()=>sortByColumn("brand",1)}>
           <div className="flex items-center justify-between">
              <span>Brand</span> 
                  <span className=" flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span>
              </div></th>
                  <th className="p-3 text-sm font-semibold  tracking-wide text-left cursor-pointer" 
            onClick={()=>sortByColumn("category",2)}>
            <div className="flex items-center justify-between">
              <span>Category</span> 
                  <span className=" flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span>
              </div></th>
          <th className="w-20 p-3 text-sm font-semibold tracking-wide text-left cursor-pointer">Sizes</th>
          <th className="p-3 text-sm font-semibold  tracking-wide text-left" 
            onClick={()=>sortByColumn("price",3)}>
            <div className="flex items-center justify-between">
              <span>Price</span> 
                  <span className=" flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span>
              </div></th>
        </tr>
        </thead>
        <tbody className=" divide-gray-100">
        {ShownArr.map(item=>{
            return(
                <tr className="bg-white">
                 <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                 
            <a href="#" className="font-bold text-blue-500 hover:underline">{item.id}</a>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <img style={{width:"40px", height:"40px"}}  src={item.images[0]} alt="" />
                </td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <span
            className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">Delivered</span>
          </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name}</td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex ">{item.colors.map((item)=>{
            return(
              <div className="mx-px"
              style={{borderRadius:"100%", border:"1px solid black", backgroundColor:`${item}`, width:"20px", height:"20px"}}></div>)
          })} </td>
          <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.brand}</td>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.category}</td>
                <td className="p-3 text-sm font-bold   text-gray-700 whitespace-nowrap">{item.sizes.join("/")}</td>
                <td className="p-3 text-sm  font-bold text-gray-700 whitespace-nowrap">{item.price+"$"}</td>
                </tr>
            )
        })
        }
        </tbody>
      </table>
    </div>
      </div> 
    )
}

