// import React, { Component } from 'react'

// export default class Header extends Component {
//   render() {
//     return (
//       <div className='bg header'>header</div>
//     )
//   }
// }
import style from "./Header.module.css";
const Header = () => {
  return <div className={`${style["header"]} bg`}>header</div>;
};

export default Header;
