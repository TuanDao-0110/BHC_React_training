// import React, { Component } from "react";

// export default class Count extends Component {

//   render() {
//     let { name, fn, value } = this.props.value;

//     return <div className="card bg">{name}</div>;
//   }
// }
import style from "./Count.module.css";
const Count = (props) => {
  let { name, value } = props.value;
  let { action } = props;
  return (
    <div
      className={style["card"]}
      onClick={() => {
        action(value);
      }}
    >
      {name}
    </div>
  );
};

export default Count;
