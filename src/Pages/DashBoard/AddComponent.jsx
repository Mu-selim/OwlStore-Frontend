import { useState } from "react";
import { item } from "../../data/data";
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
    <div  id="addcomp" className=" p-3 d-flex flex-column gap-3">
        <Link id="icon" to="/">
            <OwlIcon />
          </Link>
        <h1 id="addhead"className="">Add Item: </h1>
        <div className="form-group">
            <label >Barcode</label>
            <input type="text" className="form-control Regular shadow"
                placeholder="Barcode" id="txtBarcode" 
                value={AddObjectTxt.Barcode} name="Barcode" onChange={changeinputvlaue}/>
            <span className="text-danger" id="Bardcodewarn" style={{display:"none"}}>Barcode must be a number</span>
        </div>
        <div className="form-group">
            <label >Image</label>
            <input type="text" className="form-control Regular shadow" placeholder="Image" id="txtImage"
            value={AddObjectTxt.Image} name="Image" onChange={changeinputvlaue}/>
            <span className="text-danger" style={{display:"none"}}></span>
        </div>
        <div className="form-group">
            <label >Name</label>
            <input type="text" className="form-control Regular shadow" placeholder="Name" id="txtName" 
             value={AddObjectTxt.Name} name="Name" onChange={changeinputvlaue}/>
             <span className="text-danger" id="namewarn"style={{display:"none"}}>Name cannnot be a number or empty</span>
        </div>
        <div className="form-group">
            <label >Brand</label>
            <input type="text" className="form-control Regular shadow" placeholder="Brand" 
             value={AddObjectTxt.Brand} id="txtBrand" name="Brand" onChange={changeinputvlaue}/>
             <span className="text-danger" id="Brandwarn"style={{display:"none"}}>Brand cannot be a number or empty</span>
        </div>
        <div className="form-group">
            <label >Category</label>
            <input type="text" className="form-control Regular shadow" placeholder="Category" 
            value={AddObjectTxt.Category} id="txtCategory" name="Category" onChange={changeinputvlaue}/>
            <span className="text-danger" id="categorywarn" style={{display:"none"}}>Category cannot be a number or empty</span>
        </div>
        <div className="form-group">
            <label >Price</label>
            <input type="text" className="form-control Regular shadow" placeholder="Price"
             value={AddObjectTxt.Price} id="txtPrice" name="Price" onChange={changeinputvlaue} />
             <span className="text-danger" id="pricewarn"style={{display:"none"}}>Price must be a number and not empty</span>
        </div>
        <button type="submit" id="additembtn"className="mt-2 Regular shadow btn bg-yellow-light p-2 font-bold w-75 align-self-center" onClick={SavingAdd}>ADD Item</button>
        <button  id="resetbtn" className="mt-2 mb-2 Regular shadow btn bg-secondary p-2 font-bold w-75 align-self-center" onClick={Resetinput}>Reset</button>
    </div>
)
}