import { useState } from "react";
import {OwlIcon} from "../../components/icons/owlIcon"
import { Link } from "react-router-dom";
export let AddComponent=(props)=>{
    let [AddObjectTxt, setAddObjectTxts] = useState({
        Barcode: '',
        Image: '',
        Name: '',
        Brand: '',
        Category:'',
        Price:'',
    });
    let validateForm=()=> {
        let warnbar= document.getElementById("Bardcodewarn");
        let warnname=document.getElementById("namewarn");
        let Brandwarn=document.getElementById("Brandwarn");
        let catwarn=document.getElementById("categorywarn");
        let pricewarn=document.getElementById("pricewarn");

        if (AddObjectTxt.Barcode.length==0 ||isNaN(parseFloat(AddObjectTxt.Barcode))|| !isFinite(AddObjectTxt.Barcode)) {
            warnbar.style.display="inline";
            return false;
        } 
        else
        {
            warnbar.style.display="none";
        }
         if (AddObjectTxt.Name.length == 0 ||!isNaN(parseFloat(AddObjectTxt.Name))) {
            warnname.style.display="inline";
            return false;
         }
         else
         {
            warnname.style.display="none";
         }
         if (AddObjectTxt.Brand.length==0 ||!isNaN(parseFloat(AddObjectTxt.Brand))) {
            Brandwarn.style.display="inline";
            return false;
        } 
        else
        {
            Brandwarn.style.display="none";
        }
        if (AddObjectTxt.Category.length==0 ||!isNaN(parseFloat(AddObjectTxt.Category))) {
            catwarn.style.display="inline";
            return false;
        } 
        else
        {
            catwarn.style.display="none";
        }
        if (AddObjectTxt.Price.length==0 ||isNaN(parseFloat(AddObjectTxt.Price))|| !isFinite(AddObjectTxt.Price)) {
            pricewarn.style.display="inline";
            return false;
        } 
        else
        {
            pricewarn.style.display="none";
        }
        return true;
    }
    
    let changeinputvlaue = (e) => {
        setAddObjectTxts({
            ...AddObjectTxt,
            [e.target.name]: e.target.value
        })
    }

    let Resetinput=()=>{
        setAddObjectTxts({
            ...AddObjectTxt,
            Barcode: '',
            Image: '',
            Name: '',
            Brand: '',
            Category:'',
            Price:'',
        })
    }
 let SavingAdd = () => {
   if(validateForm())
   {
    let newObject = new item(AddObjectTxt.Barcode,AddObjectTxt.Image, AddObjectTxt.Name, AddObjectTxt.Brand
        ,AddObjectTxt.Category,AddObjectTxt.Price);
    // eslint-disable-next-line react/prop-types
    props.SaveAddHRef(newObject);
    Resetinput();
    }
}
    
return (
    <div  id="addcomp" className=" p-3 flex flex-col gap-2">
        <Link id="icon" to="/">
            <OwlIcon />
          </Link>
        <h1 id="addhead"className="">Item: </h1>
        <div>
            <label  htmlFor="txtName" >Name</label>
            <input type="text" className="rounded p-1 w-full" placeholder="Name" id="txtName" 
             value={AddObjectTxt.Name} name="Name" onChange={changeinputvlaue}/>
             <span className="text-red-500" id="namewarn"style={{display:"none"}}>Name cannnot be a number or empty</span>
        </div>
        <div>
            <label  htmlFor="txtBrand">Brand</label>
            <input type="text" className="rounded p-1 w-full" placeholder="Brand" 
             value={AddObjectTxt.Brand} id="txtBrand" name="Brand" onChange={changeinputvlaue}/>
             <span className="text-red-500" id="Brandwarn"style={{display:"none"}}>Brand cannot be a number or empty</span>
        </div>
        <div>
            <label htmlFor="txtCategory" >Category</label>
            <input type="text" className="rounded p-1 w-full" placeholder="Category" 
            value={AddObjectTxt.Category} id="txtCategory" name="Category" onChange={changeinputvlaue}/>
            <span className="text-red-500" id="categorywarn" style={{display:"none"}}>Category cannot be a number or empty</span>
        </div>
        <div>
            <label htmlFor="txtPrice">Price</label>
            <input type="text" className="rounded p-1 w-full" placeholder="Price"
             value={AddObjectTxt.Price} id="txtPrice" name="Price" onChange={changeinputvlaue} />
             <span className="text-red-500" id="pricewarn"style={{display:"none"}}>Price must be a number and not empty</span>
        </div>
        <button type="submit" id="additembtn"className="mt-2 bg-yellow-light p-2 font-bold w-3/4 self-center rounded-lg" onClick={SavingAdd}>ADD Item</button>
        <button  id="resetbtn" className="mt-2 mb-2 bg-red-600 hover:bg-red-700 p-2 font-bold w-3/4  self-center rounded-lg" onClick={Resetinput}>Reset</button>
    </div>
)
}