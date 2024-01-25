import React from "react";
import styles from "../../../styles/account-info.module.scss";
import balanceIcon from "../../../assets/icons/balance.svg";
import arrowRightIcon from "../../../assets/icons/arrow-right.svg";
import infoIcon from "../../../assets/icons/info.svg";
import LendoButton from "../../lendo-button";

export const AccountInfo: React.FC = () => {
  return (
    <div className={styles.accountInfo}>
      <div>
        <div className={styles.accountInfo__balanceContainer}>
          <img src={balanceIcon} alt="balance-icon" width={56} height={56} />
          <div>
            <span className={styles.balanceValue}>62,540 SAR</span>
            <div className={styles.balanceActions}>
              <span className={styles.label}>Account Balance</span>
              <button className={styles.actionBtn}>
                <img
                  src={arrowRightIcon}
                  alt="arrow-right-icon"
                  width={16}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.accountInfo__buttonsContainer}>
          <LendoButton
            style={{ width: 112 }}
            color="primary"
            label="Deposit"
          ></LendoButton>
          <LendoButton
            style={{ width: 112 }}
            color="secondary"
            label="Withdraw"
          ></LendoButton>
        </div>
        <div className={styles.accountInfo__infoContainer}>
          <img src={infoIcon} alt="info-icon" width={20} height={20} />
          <div className={styles.infoMessage}>
            To withdraw more than
            <span className={styles.bold}> 10,000 SAR</span> you need to
            <span className={styles.bold}> verify </span>
            your banking account.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
