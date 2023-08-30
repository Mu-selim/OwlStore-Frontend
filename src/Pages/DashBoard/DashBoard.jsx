import { Component, useState } from "react";
import { itemsArr } from "./data";
import { item } from "./data";
import { ItemsList } from "./ListComponent";
import { AddComponent } from "./AddComponent";
import "../../assets/dashBoard.css";


 export class Dashboard extends Component{
    state={
        itemsArr:itemsArr
    }
    saveAdd=(_Object)=>{
        let newArray = [...this.state.itemsArr,_Object];
               this.setState({
                itemsArr: newArray
               })
       }
       render(){
        return(
            <div className="flex ">
                <div className="">
                    <AddComponent itemsArrRef={this.state.itemsArr} SaveAddHRef={this.saveAdd}/>
                </div>
                <div className="w-100">
                <ItemsList itemsArrRef={this.state.itemsArr}/>
                </div>
                
            </div>
            
        )
       }
}