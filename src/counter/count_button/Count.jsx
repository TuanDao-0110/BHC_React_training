import style from "./Count.module.css";
const Count = (props) => {
  let { name, value } = props.value;
  let { setState } = props;
  return (
    <div
      className={`${style["card"]}`}
      // className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      onClick={() => {
        setState(value);
      }}
    >
      {name}
    </div>
  );
};

export default Count;
