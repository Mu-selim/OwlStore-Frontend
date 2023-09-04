/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import {OwlIcon} from "../../components/icons/owlIcon"
import { Link } from "react-router-dom";
import { uniquecategorys } from "./categorydropdown";
import { CheckBox } from "./ColorsInput";
import { TxtInput } from "./TxtInput";
import { RadioButton } from "./RadioButton";
import { Product } from "../../data/Product";
import {UniqueColors} from "./UniqueColors"
import { useEffect } from "react";
const clothesSize = ['xs', 's','m','l','xl'];
const trouserMen = [34, 36, 38, 40, 42, 44, 46, 48];
const trouserWomen = [26, 28, 30, 32, 34, 36, 38, 40, 42, 44];
const shoeSize = [41, 42, 43, 44, 45];
export let AddComponent=(props)=>{
    let checkboxes=document.querySelectorAll("input[type=checkbox]");
    let [AddObjectTxt, setAddObjectTxts] = useState({
        product:props.ProductRef,
        Name:'',
        Brand:'',
        Category:'',
        Price:'',
        Gender:'',
        Addbtntxt:"ADD Item",
        Resetbtntxt:"Reset",
        Nameflag:null,
        Brandflag:null,
        Priceflag:null
    });
    let ValidateString=(e)=>{
        if(e.target.value=="")
        {
            document.getElementById(`warn${e.target.name}`).innerText=`${e.target.name} cannot be empty`;
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:false
            })
        }
        else if(e.target.value.length<3||e.target.value.length>60)
        {
            document.getElementById(`warn${e.target.name}`).innerText=`${e.target.name} Must be between 3 and 60 chars`;
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:false
            })
        }
        else
        {
            document.getElementById(`warn${e.target.name}`).innerText="";
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:true
            })
        }    
    }

    let ValidateNumber=(e)=>{
        var numberRegex = /^\d+$/;
        if(e.target.value=="")
        {
            document.getElementById(`warn${e.target.name}`).innerText=`${e.target.name} cannot be empty.`;
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:false
            })

        }
        else if(!numberRegex.test(e.target.value))
        {
            document.getElementById(`warn${e.target.name}`).innerText=`${e.target.name} can only contain numbers`;
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:false
            })
        }
        else if(parseInt(e.target.value)>500||parseInt(e.target.value)<=0)
        {
            document.getElementById(`warn${e.target.name}`).innerText=`${e.target.name} can only contain numbers from 1 to 500`;
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:false
            })
        }
        else
        {
            document.getElementById(`warn${e.target.name}`).innerText="";
            setAddObjectTxts({
                ...AddObjectTxt,
                [`${e.target.name}flag`]:true
            })
        }    
    }

    let changeinputvlaue = (e) => {
        setAddObjectTxts({
            ...AddObjectTxt,
            [e.target.name]: e.target.value
        })
    }
    let Resetinput=()=>{
        document.querySelectorAll(".warning").forEach((e)=>e.innerText="");
        checkboxes.forEach((e)=>{
            e.checked=false;
        })
        setAddObjectTxts({
            ...AddObjectTxt,
            Name: '',
            Brand: '',
            Category:'',
            Price:'',
            Gender:"male",
            Addbtntxt:"ADD Item",
            Resetbtntxt:"Reset"
        })
    }
    let SavingAdd = () => {
    let flag=true;
    let colorsArr=[];
    checkboxes.forEach((e)=>{
        if(e.checked)
        colorsArr.push(e.value);
    })
    if(!AddObjectTxt.Category)
    {
        document.getElementById("categorywarn").innerText="pick a category";
        flag=false;
    }
    else
    document.getElementById("categorywarn").innerText="";
    if(colorsArr.length==0)
    {
        document.getElementById("colorswarn").innerText="Choose at least 1 color";
        flag=false;
    }
    else
    document.getElementById("colorswarn").innerText="";
    if(!AddObjectTxt.Gender)
    {
        document.getElementById("genderwarn").innerText="Choose a gender";
        flag=false;
    }
    else
    document.getElementById("genderwarn").innerText="";
    if(AddObjectTxt.Brand==""&&AddObjectTxt.Addbtntxt=="ADD Item")
    {
        flag=false;
        document.getElementById("warnBrand").innerText="Brand cannot be empty";
    }
    if(AddObjectTxt.Name==""&&AddObjectTxt.Addbtntxt=="ADD Item")
    {document.getElementById("warnName").innerText="Name cannot be empty";
        flag=false;
    }
    if(AddObjectTxt.Price==""&&AddObjectTxt.Addbtntxt=="ADD Item")
    {document.getElementById("warnPrice").innerText="Price cannot be empty";
        flag=false;}
    if(AddObjectTxt.Nameflag==false||AddObjectTxt.Priceflag==false||AddObjectTxt.Brandflag==false)
    {
        flag=false;
    }
    if(flag)
    {
        if(AddObjectTxt.Addbtntxt=="ADD Item")
    {   
        let sizes=[];
        if(AddObjectTxt.Category=="T-shirt"||AddObjectTxt.Category=="Jacket"||AddObjectTxt.Category=="Shirt")
            sizes=clothesSize;
        else if(AddObjectTxt.Category=="Shoes")
            sizes=shoeSize;
        else if(AddObjectTxt.Category=="Trouser"&&AddObjectTxt.Gender=="male")
            sizes=trouserMen;
        else if(AddObjectTxt.Category=="Trouser"&&AddObjectTxt.Gender=="female")
        sizes=trouserWomen;
        let newObject = new Product(AddObjectTxt.Name.toString(),parseInt(AddObjectTxt.Price),["public/images/DashBoard/imagePlaceholder.png"],
     AddObjectTxt.Gender, AddObjectTxt.Category
        ,sizes,colorsArr,"",AddObjectTxt.Brand);
        props.SaveAddHRef(newObject);
    }
    else
    {
        let editiedProduct=props.ProductRef;
        editiedProduct.name=AddObjectTxt.Name;
        editiedProduct.brand=AddObjectTxt.Brand;
        editiedProduct.category=AddObjectTxt.Category;
        editiedProduct.price=parseInt(AddObjectTxt.Price);
        editiedProduct.gender=AddObjectTxt.Gender;
        editiedProduct.colors=colorsArr;
        props.SaveEditHandlerRef(editiedProduct);
        setAddObjectTxts({
            ...AddObjectTxt,
            product:null
        })
    }
    Resetinput();
    }
    // eslint-disable-next-line react/prop-types
}
useEffect(()=>{
    setAddObjectTxts({
        ...AddObjectTxt,
        product:props.ProductRef
    })
        if(props.ProductRef==null)
        {
            return;
        }
        else
        {
            setAddObjectTxts({
                Name:props.ProductRef.name,
                Brand:props.ProductRef.brand,
                Category:props.ProductRef.category,
                Price:props.ProductRef.price,
                Gender:props.ProductRef.gender,
                Addbtntxt:"Confirm",
                Resetbtntxt:"Cancel"
            });
        }
    },[props.ProductRef,props.triggerEdit])
return (
    <div  id="addcomp" className="pt-3 px-3 flex flex-col lg:gap-0.5">
        <Link id="icon" to="/">
            <OwlIcon />
          </Link>
        <h2 id="addhead"className="">Item: </h2>
        <TxtInput value={AddObjectTxt.Name} name={"Name"} change={changeinputvlaue} validate={ValidateString}/>
        <TxtInput value={AddObjectTxt.Brand} name={"Brand"} change={changeinputvlaue} validate={ValidateString}/>
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
        <span className="spann warning text-xs text-red-600" id="categorywarn"></span>
        </div>
        <TxtInput value={AddObjectTxt.Price} name={"Price"} change={changeinputvlaue} validate={ValidateNumber}/>
        <span>Gender</span>
        <div className="flex flex-row flex-wrap">
            <RadioButton name={"Male"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="male")?true:false}/>
            <RadioButton name={"Female"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="female")?true:false} />
            <RadioButton name={"Uni"} change={changeinputvlaue} checked={(AddObjectTxt.Gender=="uni")?true:false}/>
            <span className="spann warning text-xs text-red-600" id="genderwarn"></span>
        </div>
        <span >Colors</span>
        <div className="flex flex-wrap">
        {UniqueColors.map(e=>{
            return (<CheckBox color={`${e}`}/>);
        })}
        </div>
        <span className="spann warning text-xs text-red-600" id="colorswarn"></span>
        <button type="submit"  id="additembtn"className=" disabled:bg-gray-400 hover:bg-yellow-500 bg-yellow-light h-10 font-bold w-full self-center rounded-lg" onClick={SavingAdd}>{AddObjectTxt.Addbtntxt}</button>
        <button  id="resetbtn" className="mt-1 bg-red-600 text-white hover:bg-red-700 h-10 font-bold w-full  self-center rounded-lg" onClick={Resetinput}>{AddObjectTxt.Resetbtntxt}</button>
    </div>
)
}