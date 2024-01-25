import React from "react";
import { Switch } from "antd";
import styles from "../../styles/lendo-switch.module.scss";

interface LendoSwitchProps {
  readonly label: string;
  readonly onSwichChange: (checked: boolean) => void;
}

export const LendoSwitch: React.FC<LendoSwitchProps> = ({
  label,
  onSwichChange,
}) => (
  <div className={styles.lendoSwitch}>
    <span className={styles.lendoSwitch__label}>{label}</span>
    <Switch defaultChecked onChange={onSwichChange} />
  </div>
);

export default LendoSwitch;
