import React from "react";
import styles from "../../styles/button.module.scss";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly label: string;
  readonly color: "primary" | "secondary" | "danger";
}

export const LendoButton: React.FC<ButtonProps> = ({
  label,
  color,
  ...props
}) => (
  <button {...props} className={classNames(styles.button, styles[color])}>
    {label}
  </button>
);

export default LendoButton;
