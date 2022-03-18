import { AiFillShopping } from "react-icons/ai";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import { IoMdColorFilter } from "react-icons/io";
import { BsAppIndicator } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import headerStyles from "../styles/header.module.css";
const Header = () => {
  const [bars, setBars] = useState(false);
  return (
    <>
    
      <div className={headerStyles[`minu${bars?'':'Close'}`]}>
        <div>
          <h1>Logyn</h1>
          <AiFillShopping onClick={()=>setBars(false)} className={headerStyles.closeBars} />
        </div>
        <ul className={headerStyles.minuUl}>
          <li className={headerStyles.link}>
            <span>
              <BsSearch className={headerStyles.minuIcon} />
            </span>
            <span>Log In</span>
          </li>
          <li className={headerStyles.link}>
            <span>
              <BsSearch className={headerStyles.minuIcon} />
            </span>
            <span>Register Now</span>
          </li>
          <li className={headerStyles.link}>
            <span>
              <BsSearch className={headerStyles.minuIcon} />
            </span>
            <span>Log Out</span>
          </li>
        </ul>
      </div>
      <div className={headerStyles.headerContainer}>
        <header className={headerStyles.header}>
          <div className={headerStyles.iconBar}>
            <BsAppIndicator onClick={()=>setBars(true)} className={headerStyles.icon} />
          </div>
          <div className={headerStyles.logo}>
            <h2>Logyn</h2>
          </div>
          <div>
            <AiFillShopping className={headerStyles.icon} />
          </div>
        </header>
        <div className={headerStyles.searchBar}>
          <div className={headerStyles.searchBox}>
            <input type="text" name={headerStyles.search} />
            <BsSearch className={headerStyles.icon} />
          </div>
          <div className={headerStyles.iconFilter}>
            <IoMdColorFilter className={headerStyles.icon} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
