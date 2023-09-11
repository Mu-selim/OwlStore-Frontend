export let ColoredWord = (props) => {
  if (props.word == "male")
    return (
      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-red-800 bg-red-200 rounded-lg bg-opacity-50">
        {props.word.toUpperCase()}
      </span>
    );
  else if (props.word == "female")
    return (
      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">
        {props.word.toUpperCase()}
      </span>
    );
  else
    return (
      <span className="p-1.5 text-xs font-medium uppercase tracking-wider text-gray-800 bg-gray-200 rounded-lg bg-opacity-50">
        {props.word.toUpperCase()}
      </span>
    );
};
