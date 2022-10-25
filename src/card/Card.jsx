import React from "react";
import style from "./card.module.css";
export default function card(props) {
  const { name, title, age, languages } = props.person;
  return (
    <div className={style["box"]}>
      <p>Name : {name}</p>
      <p>Title : {title}</p>
      <p>age : {age}</p>
      {languages.map((item, index) => {
        const { name, id } = item;
        return (
          <span key={index}>
            {" "}
            {!index? "" : "--"}name: {name}
          </span>
        );
      })}
    </div>
  );
}
