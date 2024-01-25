import React from "react";
import styles from "../../../styles/header-right-menu.module.scss";
import bell from "../../../assets/icons/bell.svg";
import profile from "../../../assets/icons/profile.svg";

export const HeaderRightMenu: React.FC = () => {
  const notificationCount: number = 2;
  return (
    <div className={styles.headerRightMenu}>
      <span className={styles.headerRightMenu__lang}>En</span>
      <div className={styles.headerRightMenu__notificationContainer}>
        <img src={bell} alt="notification-logo" width={24} height={24} />
        <span className={styles.notificationCount}>{notificationCount}</span>
      </div>
      <img src={profile} alt="profile-logo" width={40} height={40} />
    </div>
  );
};
export default HeaderRightMenu;
