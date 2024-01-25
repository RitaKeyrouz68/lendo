import React from "react";
import styles from "../../../styles/auto-invest-summary.module.scss";
import KPIs, { KPIsProps } from "./kpis";
import LendoButton from "../../../components/lendo-button";

const KPIsList: KPIsProps[] = [
  { label: "Status", value: "Active", color: "#80CB17" },
  { label: "Max. Investement", value: "1500 SAR", color: "#0D0F52" },
  { label: "Loans Funded", value: "26", color: "#0D0F52" },
];

export const Summary: React.FC = () => {
  return (
    <div className={styles.summaryContainer}>
      <div className={styles.summaryContainer__boxContainer}>
        <div>
          <span className={styles.title}>Conservative</span>
          <span className={styles.value}>10-14%</span>
          <span className={styles.unit}>Interest Rate</span>
        </div>
      </div>
      <div className={styles.summaryContainer__KPIsContainer}>
        <div className={styles.KPIs}>
          {KPIsList.map((elt, index) => (
            <KPIs
              key={index}
              label={elt.label}
              value={elt.value}
              color={elt.color}
            />
          ))}
        </div>
        <div className={styles.strategyActions}>
          <span className={styles.startDate}>
            * Strategy started at 20th March 2021
          </span>
          <div className={styles.actions}>
            <LendoButton label="Stop" color="danger" />
            <LendoButton label="Change Settings" color="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
