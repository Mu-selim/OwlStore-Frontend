/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useState } from "react";
var sort = [
  { name: "name", dsc: 0 },
  { name: "brand", dsc: 0 },
  { name: "category", dsc: 0 },
  { name: "price", dsc: 0 },
];
export let ItemsList=(props)=>{
  let {itemsArrRef}=props;
  let [ShownArr, setShownArr] = useState(itemsArrRef);
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
    return(
      <div>
        <div className="w-100 ">
        <nav className="navbar navbar-light bg-light w-100">
          <form className="form-inline w-100 mx-3 p-1">
            <input id="search" className="form-control Regular shadow" type="search" placeholder="Search By Name" aria-label="Search" onChange={Searchfun}/>
          </form>
        </nav>
        </div>
        <div id="filtercontainer" className="d-flex  justify-content-end flex-column flex-md-row">
        <select
            className="filters"
            name="Brand-filter"
            id="Brand-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Brand</option>
            <option value="Gucci">Gucci</option>
            <option value="Mavi">Mavi</option>
            <option value="Gant">Gant</option>
            <option value="Blaker">Blaker</option>
            <option value="Harley">	Harley</option>
          </select>
          <select
            className="filters  "
            name="Category-filter"
            id="Category-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Category</option>
            <option value="Tops">Tops</option>
            <option value="Bottoms">Bottoms</option>
          </select>
          <select
            className="filters "
            name="Price-filter"
            id="Price-filter"
            onChange={filterEmployees}
          >
            <option value="" selected>Filter by Price</option>
            <option value="0,100">0 - 100</option>
            <option value="100,200">100 - 200</option>
            <option value="200,300">200 - 300</option>
            <option value="300,400">300 - 400</option>
            <option value="400,90000">400 - &infin;</option>
          </select>
          <button id="clearfilters" className="btn " onClick={clearfilters}>Clear Filters </button>
        </div>
        <table className="table table-hover">
  <thead className="table-dark align-middle">
    <tr >
      <th scope="col" >Barcode
     </th>
      <th scope="col">Image</th>
      <th scope="col" onClick={()=>sortByColumn("name",0)}> 
      <div role="button" className="d-flex  flex-row justify-content-between ">
      <span className="mt-1.5">Name</span>
      <span className="cursor-pointer d-flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span>
        </div> </th>
      <th scope="col"   onClick={()=>sortByColumn("brand",1)}>
      <div role="button" className="d-flex  flex-row justify-content-between ">
        <span className="mt-1.5">Brand</span>
      <span className="cursor-pointer d-flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span></div></th>
      <th scope="col"  onClick={()=>sortByColumn("category",2)}>
       <div role="button" className="d-flex  flex-row justify-content-between ">
         <span className="mt-1.5">Category</span>
      <span className="cursor-pointer d-flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span></div></th>
      <th scope="col"  onClick={()=>sortByColumn("price",3)}>
      <div role="button" className="d-flex flex-row justify-content-between "> 
      <span className="mt-1.5">Price</span>
      <span className="cursor-pointer d-flex flex-col text-xs">
                    <span className="translate-y-1">▴</span>
                    <span className="-translate-y-1">▾</span>
                  </span></div> </th>
    </tr>
  </thead>
  <tbody>
        {ShownArr.map(item=>{
            return(
                <tr>
                <th scope="row">{item.barcode}</th>
                <td><img style={{width:"40px", height:"40px"}}  src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>{item.price+"$"}</td>
                </tr>
            )
        })
        }
  </tbody>
    </table>
      </div>
        
    )
}

