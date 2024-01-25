import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../../../styles/header-left-menu.module.scss";
import classNames from "classnames";

const items = [
  {
    label: "Overview",
    key: "/overview",
  },
  {
    label: "Invest",
    key: "/invest",
  },
  {
    label: "Auto-Invest",
    key: "/auto-invest",
  },
  {
    label: "My Portfolio",
    key: "/my-portfolio",
  },
];

export const HeaderLeftMenu: React.FC = () => {
  const { pathname } = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("/auto-invest");

  const handleSelectedMenu = useCallback((key: string) => {
    setSelectedMenu(key);
  }, []);

  useEffect(() => {
    setSelectedMenu(pathname);
  }, [pathname]);

  return (
    <nav className={styles.headerLeftMenu}>
      {items.map((elt) => (
        <Link
          key={elt.key}
          onClick={() => handleSelectedMenu(elt.key)}
          className={classNames(
            styles.headerLeftMenu__link,
            selectedMenu === elt.key ? styles.selected : ""
          )}
          to={elt.key}
        >
          {elt.label}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderLeftMenu;
