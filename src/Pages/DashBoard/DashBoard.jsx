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
            <div className="flex  flex-col md:flex-row">
                <div className=" md:sticky md:top-0 md:h-screen md:w-1/6">
                    <AddComponent itemsArrRef={ShownArr} SaveAddHRef={saveAdd}/>
                </div>
                <div className="md:w-5/6 max-w-full">
                <ItemsList itemsArrRef={ShownArr} />
                </div>
            </div>
            
        )
}