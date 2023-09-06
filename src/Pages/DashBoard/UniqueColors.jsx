import { ProductArray } from "../../data/ProductArray";
export let UniqueColors=[];
ProductArray.forEach((item) =>{ 
    item.colors.forEach((col)=>{
      if(!UniqueColors.includes(col.toLowerCase()))
      UniqueColors.push(col.toLowerCase());
    })
      });