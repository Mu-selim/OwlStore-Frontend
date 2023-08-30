/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
import { useState } from "react";
export let ItemsList=(props)=>{
  var sort = [
    { name: "name", dsc: 0 },
    { name: "age", dsc: 0 },
    { name: "salary", dsc: 0 },
    { name: "department", dsc: 0 },
  ];
  let {itemsArrRef}=props;
  let [ShownArr, setShownArr] = useState(itemsArrRef);
    console.log(ShownArr);
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
      var _brand = document.getElementById("Brand-filter").value="";
      var category = document.getElementById("Category-filter").value="";
      var price = document.getElementById("Price-filter").value="";
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
        <div id="filtercontainer">
        <select
            className="filters "
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
    <tr>
      <th scope="col" >Barcode
     </th>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Brand</th>
      <th scope="col">Category</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
        {ShownArr.map(item=>{
            return(
                <tr>
                <th scope="row">{item.barcode}</th>
                <td>{item.image}</td>
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

