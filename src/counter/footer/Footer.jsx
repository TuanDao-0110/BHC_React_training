// import React, { Component } from 'react'

// export default class Footer extends Component {
//   render() {
//     return (
//       <div className='bg footer'>Footer</div>
//     )
//   }
// }
import style from "./Footer.module.css";
const Footer = () => {
  return <div className={`${style.footer} bg`}>Footer</div>;
};

export default Footer;
