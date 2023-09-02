export let TxtInput=(props)=>{
    return(<div>
        <label htmlFor={`txt${props.name}`}>{props.name}</label>
        <input type="text" className="rounded p-1 w-full" placeholder={props.name}
         value={props.value} id={`txt${props.name}`} name={props.name} onChange={props.change} />
    </div>)
}