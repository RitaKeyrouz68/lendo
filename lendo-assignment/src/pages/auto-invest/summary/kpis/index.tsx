import React from "react";
import styles from "../../../../styles/summary-kpis.module.scss";

export interface KPIsProps {
  readonly label: string;
  readonly value: string;
  readonly color: string;
}

export const KPIs: React.FC<KPIsProps> = ({ label, value, color }) => {
  return (
    <div className={styles.KPIs}>
      <span className={styles.KPIs__label} style={{ color }}>
        {value}
      </span>
      <span className={styles.KPIs__value}>{label}</span>
    </div>
  );
};

export default KPIs;
