import React from "react";
import styles from "../../styles/sidebar.module.scss";
import Logo from "../logo";
import AccountInfo from "./account-info";
import TrustBox from "./trust-box";

export const Sidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__logoContainer}>
        <Logo />
      </div>
      <div className={styles.sidebar__content}>
        <AccountInfo />
        <TrustBox />
      </div>
    </div>
  );
};

export default Sidebar;
