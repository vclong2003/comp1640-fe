import React from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";

interface DoughnutChartProps {
  sourceData: { label: string; value: number }[];
}

export const StyledDoughnutChart = styled.div`
  height: 90%;
  width: 100%;
`;

interface DoughnutChartProps {
  sourceData: { label: string; value: number }[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({ sourceData }) => {
  return (
    <StyledDoughnutChart>
      <Doughnut
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Transactions",
              data: sourceData.map((data) => data.value),
              backgroundColor: ["#236192", "#F2BA1D", "#D9D9D9"],
              borderColor: ["#236192", "#F2BA1D", "#D9D9D9"],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Analytics",
            },
          },
        }}
      />
    </StyledDoughnutChart>
  );
};

export default DoughnutChart;
