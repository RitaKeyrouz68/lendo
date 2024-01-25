import React from "react";
import styles from "../../../styles/faq.module.scss";
import arrowDownIcon from "../../../assets/icons/arrow-down.svg";

const faqList: string[] = [
  "Why should I trust this tool?",
  "What risks are related to investments?",
  "What is the Auto-Investment?",
];
export const Faq: React.FC = () => {
  return (
    <div className={styles.faqContainer}>
      <span className={styles.faqContainer__title}>You Might Want to Know</span>
      <div className={styles.faqContainer__list}>
        {faqList.map((elt, index) => (
          <div key={index} className={styles.faqDropdown}>
            <span className={styles.faq}>{elt}</span>
            <img
              src={arrowDownIcon}
              alt="arrow-down-icon"
              width={16}
              height={16}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
