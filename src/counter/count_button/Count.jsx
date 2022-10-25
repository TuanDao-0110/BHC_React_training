// import React, { Component } from "react";

// export default class Count extends Component {

//   render() {
//     let { name, fn, value } = this.props.value;

//     return <div className="card bg">{name}</div>;
//   }
// }
import style from "./Count.module.css";
const Count = (props) => {
  let { name, fn, value } = props.value;
  let { state, setState } = props;
  return (
    <div
      className={style["card"]}
      onClick={() => {
        switch (fn) {
          case "add":
            return setState(state + value);
          case "remove":
            return setState(state - value);
          default:
            setState(0);
        }
      }}
    >
      {name}
    </div>
  );
};

export default Count;
