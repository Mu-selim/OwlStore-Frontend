import { ProductArray } from "../../data/ProductArray";
export let uniquecategorys=[];
ProductArray.filter((item) =>{ 
    if(!uniquecategorys.includes(item.category))
    uniquecategorys.push(item.category);
      });
