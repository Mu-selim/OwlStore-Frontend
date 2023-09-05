import { ItemsList } from "./ListComponent";
import { AddComponent } from "./AddComponent";
import "../../assets/dashBoard.css";
import { useState } from "react";
import { ProductArray } from "../../data/ProductArray";
 export let Dashboard = ()=>{ 
    const [ShownArr, setShownArr] = useState(ProductArray);
    const [emptyProduct, setemptyProduct]=useState(null);
    const [triggerEdit,setTriggerEdit]=useState(false);
    let saveAdd=(_Object)=>{
        setShownArr([...ShownArr,_Object]);    
       }
    let setEditObj=(_Object)=>{
        setTriggerEdit(!triggerEdit);
        setemptyProduct(_Object);
    }
    let RemoveHandler=(index)=>{
        let newArr=ShownArr.filter(()=>{return true});
        newArr.splice(index,1);
        setShownArr(newArr);
    }
    let SaveEditHandler=(_Object)=>{
        let newArr=ShownArr.filter(()=>{return true});
        for(let i=0;i<newArr.length;i++)
            if(newArr[i].id==_Object.id)
            {
                newArr[i]=_Object;
            }
        setShownArr(newArr);
    }
        return(
            <div className="flex  flex-col md:flex-row">
                <div className=" md:sticky md:top-0 md:h-screen md:w-1/6">
                    <AddComponent triggerEdit={triggerEdit} SaveEditHandlerRef={SaveEditHandler} itemsArrRef={ShownArr} ProductRef={emptyProduct} SaveAddHRef={saveAdd}/>
                </div>
                <div className="md:w-5/6 max-w-full">
                <ItemsList itemsArrRef={ShownArr} setEditObjRef={setEditObj} RemoveHandlerRef={RemoveHandler}/>
                </div>
            </div>
            
        )
}