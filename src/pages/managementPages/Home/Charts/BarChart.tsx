import React from "react";
import { Bar } from "react-chartjs-2";
import styled from "styled-components";

interface BarChartProps {
  sourceData: { label: string; value: number }[];
}

export const StyledBarChart = styled.div`
  height: 100%;
  width: 100%;
`;

interface BarChartProps {
  sourceData: { label: string; value: number }[];
}

const BarChart: React.FC<BarChartProps> = ({ sourceData }) => {
  return (
    <StyledBarChart>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Reports",
              data: sourceData.map((data) => data.value),
              backgroundColor: ["#236192"],
              borderRadius: 5,
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Reports",
            },
          },
        }}
      />
    </StyledBarChart>
  );
};

export default BarChart;
