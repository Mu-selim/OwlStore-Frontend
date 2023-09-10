/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import { ColoredWord } from "./coloredWords";
import { uniquecategorys } from "./categoryDropDown";
import { DeleteIcon } from "../../components/icons/DeleteIcon";
import { EditIcon } from "../../components/icons/EditIcon";
import { useNavigate } from "react-router-dom";
var sort = [
  { name: "name", dsc: 0 },
  { name: "brand", dsc: 0 },
  { name: "category", dsc: 0 },
  { name: "price", dsc: 0 },
];
export let ItemsList=(props)=>{
  const Navigate = useNavigate();
  const clickProduct = (item)=>{
    Navigate(`/product/${item.id}`)
  }
  let {itemsArrRef}=props;
  let [ShownArr, setShownArr] = useState(itemsArrRef);
  let uniquebrands=[];
  itemsArrRef.filter((item) =>{ 
  if(!uniquebrands.includes(item.brand))
  uniquebrands.push(item.brand);
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
  let filterItems=()=>{
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
  let deletefun=(index)=>{
      props.RemoveHandlerRef(index);
  }
  let EditFun=(i,item)=>{
    document.querySelectorAll(".spann").forEach((item)=>item.innerText="");
    document.querySelectorAll("input[type=checkbox]").forEach((e)=>{
      e.checked=false;
    })
    let gender=document.getElementsByName("Gender");
    gender.forEach((e)=>{
      if(e.value==ShownArr[i].gender.toLowerCase())
        e.checked=true;
    })
    ShownArr[i].colors.forEach((e)=>{
      document.getElementById(`${e.toLowerCase()}`).checked=true;
    })
    props.setEditObjRef(item);

  }
   useEffect(()=>{
    setShownArr(itemsArrRef);
    },[itemsArrRef])
  return(
    
      <div>
      <div className="p-1 mt-1.5">
        <form>   
  <div className="relative ">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
      </div>
      <input style={{border:"2px solid black"}} type="text" id="search" className="w-full py-2.5 pl-7 text-sm border-3  rounded-xl" placeholder="Search by Name"
      onChange={Searchfun}/>
  </div>
</form>
      </div>
      <div className="w-full flex flex-col mb-2 justify-between mt-1 md:flex-row">
      <div className="w-full flex flex-col mb-2 mt-1 md:flex-row">
      <select
          className="filters"
          name="Brand-filter"
          id="Brand-filter"
          onChange={filterItems}
        >
          <option value="" key={""}>Filter by Brand</option>
          {uniquebrands.map((item,i)=>{
            return (<option value={item} key={i}>{item}</option>)
          })}
        </select>
        <select
          className="filters  "
          name="Category-filter"
          id="Category-filter"
          onChange={filterItems}
        >
          <option value="" >Filter by Category</option>
          {uniquecategorys.map((item,i)=>{
            return (<option value={item} key={i}>{item}</option>)
          })}
        </select>
        <select
          className="filters "
          name="Price-filter"
          id="Price-filter"
          onChange={filterItems}
        >
          <option value="" key={1}>Filter by Price</option>
          <option value="0,50" key={2}>0 - 50</option>
          <option value="50,100" key={3}>50 - 100</option>
          <option value="100,150" key={4}>100 - 150</option>
          <option value="200,250" key={5}>200 - 250</option>
          <option value="250,90000" key={6}>250 - &infin;</option>
        </select>
      </div >
      <div className="p-2 md:w-1/4">
      <button id="clearfilters" className="font-bold w-full  py-2 self-center rounded-lg"
         onClick={clearfilters}>Clear Filters </button>
      </div>
      
      </div>
      
      <div className="block overflow-x-scroll">
    <table className="w-full">
      <thead className="bg-primary border-b-2 border-gray-200 rounded-lg text-white">
      <tr >
        <th className="p-3 text-sm font-semibold tracking-wide text-left">ID.</th>
        <th className="text-sm font-semibold tracking-wide text-left">Image</th>
        
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
          <th className="p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Colors</th>
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
        <th className="p-3 text-sm font-semibold tracking-wide text-left">Sizes</th>
        <th className="p-3 text-sm font-semibold  tracking-wide text-left" 
          onClick={()=>sortByColumn("price",3)}>
          <div className="flex items-center justify-between cursor-pointer">
            <span>Price</span> 
                <span className=" flex flex-col text-xs">
                  <span className="translate-y-1">▴</span>
                  <span className="-translate-y-1">▾</span>
                </span>
            </div></th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">Actions:</th>
      </tr>
      </thead>
      <tbody className=" divide-gray-100">
      {ShownArr.map((item,i)=>{
          return(
              <tr className="bg-white hover:bg-gray-100" key={i}>
                <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                
          <span className="font-bold text-blue-500 hover:underline cursor-pointer text-sm"
          onClick={()=>clickProduct(item)}>{item.id}</span>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
        <img style={{width:"40px", height:"40px"}}  src={item.images[0]} alt="" />
              </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.name.substring(0,25)+"..."}</td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
          <ColoredWord word={item.gender}/>
        </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap flex flex-wrap w-28">{item.colors.map((item,j)=>{
          return(
            <div className="mx-px mt-2.5" key={j}
            style={{borderRadius:"100%", border:"1px solid black", backgroundColor:`${item}`, width:"20px", height:"20px"}}></div>)
        })} </td>
        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.brand}</td>
              <td className="p-3 text-sm text-gray-700 whitespace-nowrap">{item.category}</td>
              <td className="p-3 text-sm font-bold   text-gray-700 whitespace-nowrap">{item.sizes.join("/")}</td>
              <td className="p-3 text-sm  font-bold text-gray-700 whitespace-nowrap">{item.price+"$"}</td>
              <td>
                <div className="flex">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold  w-1/2 p-1.5 flex justify-center rounded-xl"
                onClick={()=>EditFun(i,item)}>
                <EditIcon/>
              </button>
                <button className="bg-red-600 hover:bg-red-700 text-white font-bold w-1/2 ml-2  mr-1 p-1.5 flex justify-center rounded-xl"
              onClick={()=>deletefun(i)}>
                <DeleteIcon/>
              </button>
                </div>
              </td>
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

