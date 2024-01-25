import React, { useCallback } from "react";
import styles from "../../styles/auto-invest.module.scss";
import LendoSwitch from "../../components/lendo-switch";
import Summary from "./summary";
import InvestCharts from "./invest-charts";
import Faq from "./faq";

export const AutoInvest: React.FC = () => {
  const handleSwitchChange = useCallback(() => {}, []);

  return (
    <div className={styles.autoInvestContainer}>
      <div className={styles.autoInvestContainer__header}>
        <span className={styles.title}>Auto Investment</span>
        <LendoSwitch label="Active" onSwichChange={handleSwitchChange} />
      </div>
      <div className={styles.autoInvestContainer__dashboard}>
        <Summary />
        <InvestCharts />
        <Faq />
      </div>
    </div>
  );
};

export default AutoInvest;
