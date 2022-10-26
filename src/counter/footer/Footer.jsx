import React, { Component } from "react";
import style from "./Footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <div className={`${style.footer} bg`}>
        {" "}
        desgin by tuan BCH-----
        <img src={require("./footer_icon.png")} alt="" srcset="" width={"150px"} height={"100px"}  />
      </div>
    );
  }
}
// const Footer = () => {
//   return (
//     <div className={`${style.footer} bg`}>
//       desgin by tuan BCH
//       <img src={require("./footer_icon.png")} alt="" srcset="" width={"150px"} height={"100px"} />
//     </div>
//   );
// };

// export default Footer;
