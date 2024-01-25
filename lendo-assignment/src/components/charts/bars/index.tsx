import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";

const chartSetting = {
  width: 396,
  height: 250,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-20px, 0)",
    },
  },
};
interface BarsPorps {
  readonly colors: string[];
  readonly dataSet: { spent: number; expected: number; month: string }[];
  readonly xdataKey: string;
  readonly series: { dataKey: string; label: string; color: string }[];
}

export const Bars: React.FC<BarsPorps> = ({
  colors,
  series,
  dataSet,
  xdataKey,
}) => (
  <BarChart
    colors={colors}
    dataset={dataSet}
    xAxis={[{ scaleType: "band", dataKey: xdataKey }]}
    series={series}
    margin={{
      left: 78,
      right: 80,
      top: 80,
      bottom: 94,
    }}
    {...chartSetting}
    slotProps={{
      legend: {
        markGap: 14,
        itemGap: 24,
        position: { vertical: "bottom", horizontal: "middle" },
        labelStyle: {
          fontSize: 14,
          fontWeight: 400,
          fontFamily: "Proxima Nova, sans-serif",
          letterSpacing: "0.21px",
          fill: "#0D0F52",
        },
      },
    }}
  />
);

export default Bars;
