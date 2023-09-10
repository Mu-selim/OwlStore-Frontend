export let CheckBox =(props)=>{
   return( <div className="flex items-center mb-2 mr-2">
   <input id={props.color} type="checkbox" value={props.color} className="w-4 h-4" onChange={props.change}/>
   <label htmlFor={props.color} className="ml-1 h-5 w-5 rounded-full " style={{backgroundColor:props.color, border:"1px solid black"}}>
   </label>
</div>)
}