export let InputArea = (props) => {
  return (
    <div className="relative h-40 w-full min-w-[200px] my-7">
      <textarea
        id={props.name}
        className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent
    bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0
    transition-all  placeholder-shown:border-black placeholder-shown:border-2
    placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-yellow-light
    focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
        placeholder=" "
        onChange={props.change}
      />
      <label
        className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 
    -top-1.5 flex h-full w-full select-none text-[11px] font-bold leading-tight
    text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px]
    before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 
    before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200
    before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1
    after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md
    after:border-t after:border-r after:border-blue-gray-200 after:transition-all
    peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75]
    peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent
    peer-placeholder-shown:after:border-transparent peer-focus:text-[15px]
    peer-focus:leading-tight peer-focus:text-yellow-light peer-focus:before:border-t-2
    peer-focus:before:border-l-2 peer-focus:before:border-yellow-light peer-focus:after:border-t-2 
    peer-focus:after:border-r-2 peer-focus:after:border-yellow-light peer-disabled:text-transparent 
    peer-disabled:before:border-transparent peer-disabled:after:border-transparent 
    peer-disabled:peer-placeholder-shown:text-blue-gray-500"
      >
        {props.name}
      </label>
      <div id={`warn${props.name}`} className={" text-primary text-sm px-1"}>
        {props.error}
      </div>
    </div>
  );
};
