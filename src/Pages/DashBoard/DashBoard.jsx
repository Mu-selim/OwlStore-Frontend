import { itemsArr } from "../../data/data";
import { ItemsList } from "./ListComponent";
import { AddComponent } from "./AddComponent";
import "../../assets/dashBoard.css";
import { useState } from "react";
import { ProductArray } from "../../data/ProductArray";
 export let Dashboard = ()=>{
    const [ShownArr, setShownArr] = useState(ProductArray);
    let saveAdd=(_Object)=>{
        setShownArr([...ShownArr,_Object]);             
       }
        return(
            <div className="container-fluid p-0 d-flex flex-column flex-md-row ">
                <div className="col-12 col-md-2 ">
                    <AddComponent itemsArrRef={ShownArr} SaveAddHRef={saveAdd}/>
                </div>
                <div className="col-12 col-md-10 align-self-end">
                <ItemsList itemsArrRef={ShownArr}/>
                </div>
            </div>
            
        )
}