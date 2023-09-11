export let RadioButton = (props) => {
  return (
    <div className=" flex items-center  mr-2 my-1">
      <input
        checked={props.checked}
        onChange={props.change}
        id={props.name}
        type="radio"
        value={props.name.toLowerCase()}
        name="Gender"
        className="w-5 h-5 border-gray-300"
      />
      <label htmlFor={props.name} className="ml-1 text-sm font-medium">
        {props.name}
      </label>
    </div>
  );
};
