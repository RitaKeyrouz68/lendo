import React, { PropsWithChildren } from "react";
import Sidebar from "../sidebar";
import styles from "../../styles/layout.module.scss";
import Header from "../header";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.layout__contentContainer}>
        <Header />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
