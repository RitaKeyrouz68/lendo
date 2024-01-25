import React from "react";
import { PieChart } from "@mui/x-charts";

interface Data {
  readonly color: string;
  readonly value: number;
  readonly label: string;
}

interface PieProps extends React.HTMLAttributes<HTMLDivElement> {
  readonly colors: string[];
  readonly width: number;
  readonly height: number;
  readonly data: Data[];
  readonly cx: number;
  readonly innerRadius: number;
}

export const Pie: React.FC<PieProps> = ({
  colors,
  width,
  height,
  data,
  cx,
  innerRadius,
  ...props
}) => (
  <div {...props}>
    <PieChart
      colors={colors}
      series={[{ cx, innerRadius, data, paddingAngle: 1 }]}
      width={width}
      height={height}
      slotProps={{
        legend: {
          markGap: 14,
          labelStyle: {
            fontSize: 14,
            fontWeight: 400,
            fontFamily: "Proxima Nova, sans-serif",
            letterSpacing: "0.21px",
            fill: "#0D0F52",
          },
        },
      }}
    ></PieChart>
  </div>
);

export default Pie;
