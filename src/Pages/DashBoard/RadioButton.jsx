/* eslint-disable react/prop-types */
export let RadioButton=(props)=>{
    return(
        <div className=" flex items-center mb-2 ml-2">
            <input checked={props.checked} 
            onChange={props.change} 
            id={props.name} type="radio"
            value={props.name.toLowerCase()}
            name="Gender"
            className="w-5 h-5 border-gray-300"/>
            <label htmlFor={props.name} className="ml-1 text-sm font-medium" >{props.name}</label>
        </div>
    )
}