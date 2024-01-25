import React from "react";
import styles from "../../../styles/trust-box.module.scss";
import trustUsImage from "../../../assets/trust-us.svg";

export const TrustBox: React.FC = () => {
  return (
    <div className={styles.trustBox}>
      <div>
        <div className={styles.trustBox__image}>
          <img
            src={trustUsImage}
            alt="trust-us-image"
            width={174}
            height={144}
          />
        </div>

        <span className={styles.trustBox__title}>Why Should You Trust It?</span>
        <span className={styles.trustBox__description}>
          Because of this and that. Anyway investing is very good
        </span>
      </div>
    </div>
  );
};

export default TrustBox;
