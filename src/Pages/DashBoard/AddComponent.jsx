/* eslint-disable react/jsx-key */
import { useState } from "react";
import {OwlIcon} from "../../components/icons/owlIcon"
import { Link } from "react-router-dom";
import { uniquecategorys } from "./categorydropdown";
import { CheckBox } from "./ColorsInput";
import { TxtInput } from "./TxtInput";
import { RadioButton } from "./RadioButton";
import { Product } from "../../data/Product";
const clothesSize = ['xs', 's','m','l','xl']; 
export let AddComponent=(props)=>{
    let checkboxes=document.querySelectorAll("input[type=checkbox]");
    let [AddObjectTxt, setAddObjectTxts] = useState({
        Name: '',
        Brand: '',
        Category:'',
        Price:'',
        Gender:"male"
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
        checkboxes.forEach((e)=>{
            e.checked=false;
        })
        console.log(AddObjectTxt.Category);
        setAddObjectTxts({
            ...AddObjectTxt,
            Name: '',
            Brand: '',
            Category:'',
            Price:'',
            Gender:"male"
        })
    }
 let SavingAdd = () => {
    let colorsArr=[];
    checkboxes.forEach((e)=>{
        if(e.checked)
        colorsArr.push(e.value);
    })
    let newObject = new Product(AddObjectTxt.Name,AddObjectTxt.Price,"../../../public/images/DashBoard/imagePlaceholder.png",
     AddObjectTxt.Gender, AddObjectTxt.Category
        ,clothesSize,colorsArr,"",AddObjectTxt.Brand);
    // eslint-disable-next-line react/prop-types
    console.log(newObject);
    props.SaveAddHRef(newObject);
    Resetinput();
}
    
return (
    <div  id="addcomp" className=" p-3 flex flex-col gap-2 md:gap-0 lg:gap-2">
        <Link id="icon" to="/">
            <OwlIcon />
          </Link>
        <h1 id="addhead"className="">Item: </h1>
        <TxtInput value={AddObjectTxt.Name} name={"Name"} change={changeinputvlaue}/>
        <TxtInput value={AddObjectTxt.Brand} name={"Brand"} change={changeinputvlaue}/>
        <div>
            <label htmlFor="Category" >Category</label>
            <select
          className="block w-full h-9 rounded text-gray-400"
          name="Category"
          id="Category"
          onChange={changeinputvlaue}
          value={AddObjectTxt.Category}
        >
          <option  value="" disabled selected>Pick a category</option>
          {uniquecategorys.map((item)=>{
            return (<option className="text-black" value={item}>{item}</option>)
          })}
        </select>
        </div>
        <TxtInput value={AddObjectTxt.Price} name={"Price"} change={changeinputvlaue}/>
        <span>Gender</span>
        <div className="flex flex-row flex-wrap">
            <RadioButton name={"Male"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="male")?true:false}/>
            <RadioButton name={"Female"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="female")?true:false} />
            <RadioButton name={"Uni"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="uni")?true:false}/>
        </div>
        <span >Colors</span>
        <div className="flex flex-wrap">
        <CheckBox color={"blue"}/>
        <CheckBox color={"green"}/>
        <CheckBox color={"yellow"}/>
        <CheckBox color={"white"}/>
        <CheckBox color={"gray"}/>
        <CheckBox color={"black"}/>
        <CheckBox color={"red"}/>
        <CheckBox color={"purple"}/>
        <CheckBox color={"orange"}/>
        </div>
        <button type="submit" id="additembtn"className="bg-yellow-light h-10 font-bold w-3/4 self-center rounded-lg" onClick={SavingAdd}>ADD Item</button>
        <button  id="resetbtn" className="mt-1 bg-red-600 hover:bg-red-700 h-10 font-bold w-3/4  self-center rounded-lg" onClick={Resetinput}>Reset</button>
    </div>
)
}