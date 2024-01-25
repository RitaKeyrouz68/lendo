import React from "react";
import styles from "../../../styles/invest-charts.module.scss";
import classNames from "classnames";
import helpIcon from "../../../assets/icons/help.svg";
import Pie from "../../../components/charts/pie";
import Bars from "../../../components/charts/bars";
const datasetBar: { spent: number; expected: number; month: string }[] = [
  {
    spent: 5000,
    expected: 0,
    month: "Jan",
  },
  {
    spent: 28000,
    expected: 0,
    month: "Fev",
  },
  {
    spent: 18000,
    expected: 0,
    month: "Mar",
  },
  {
    spent: 10000,
    expected: 0,
    month: "Apr",
  },
  {
    spent: 28000,
    expected: 0,
    month: "May",
  },
  {
    spent: 18000,
    expected: 0,
    month: "Jun",
  },
  {
    spent: 0,
    expected: 30000,
    month: "Jul",
  },
];
export const InvestCharts: React.FC = () => {
  return (
    <div className={styles.chartsContainer}>
      <div className={styles.chartsContainer__chartContainer}>
        <span className={classNames(styles.title, styles.tabTitle)}>
          Invested
          <img src={helpIcon} alt="help-icon" width={16} height={16} />
        </span>
        <Bars
          colors={["#2D91FE", "#4BDFFF"]}
          dataSet={datasetBar}
          xdataKey="month"
          series={[
            { dataKey: "spent", label: "Spent", color: "#2D91FE" },
            { dataKey: "expected", label: "Expected", color: "#4BDFFF" },
          ]}
        />
      </div>
      <div className={styles.chartsContainer__chartContainer}>
        <span className={classNames(styles.title, styles.pieTitle)}>
          Excepted Risk Score Distribution
        </span>
        <Pie
          cx={62}
          innerRadius={40}
          style={{ marginTop: 46 }}
          colors={["#FFC359", "#2D91FE", "#FF6769", "#4BDFFF"]}
          width={300}
          height={144}
          data={[
            { value: 51.5, label: "D - 51.5%", color: "#FF6769" },
            { value: 51.5, label: "B - 51.5%", color: "#4BDFFF" },
            { value: 23.2, label: "C - 23.2%", color: "#FFC359" },
            { value: 45.7, label: "A - 45.7%", color: "#2D91FE" },
          ]}
        />
      </div>
    </div>
  );
};

export default InvestCharts;
