import React from "react";
import HeaderLeftMenu from "./header-left-menu";
import HeaderRightMenu from "./header-right-menu";
import styles from "../../styles/header.module.scss";

export const Header: React.FC = () => {
  return (
    <div className={styles.header}>
      <HeaderLeftMenu></HeaderLeftMenu>
      <HeaderRightMenu></HeaderRightMenu>
    </div>
  );
};
export default Header;
