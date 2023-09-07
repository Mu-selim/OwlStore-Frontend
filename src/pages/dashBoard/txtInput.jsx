export let TxtInput=(props)=>{
    return(<div>
        <label htmlFor={`txt${props.name}`}>{props.name}</label>
        <input type="text" className="rounded p-1 w-full pl-2" placeholder={props.name}
         value={props.value} id={`txt${props.name}`} name={props.name} onChange={props.change} onKeyUp={props.validate} />
         <span className="spann warning text-xs text-red-600" id={`warn${props.name}`}></span>
    </div>)
}