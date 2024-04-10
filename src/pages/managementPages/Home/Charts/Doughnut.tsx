import { ITotalContributionsByFaculty } from "@interfaces/contribution.interfaces";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import styled from "styled-components";
import contributionService from "@service/contribution";

export const StyledDoughnutChart = styled.div`
  width: 100%;
  height: 100%;
`;

const DoughnutChart = () => {
  const [data, setData] = useState<ITotalContributionsByFaculty[]>([]);

  useEffect(() => {
    contributionService.getTotalContributionsByFaculty().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <StyledDoughnutChart>
      <Doughnut
        data={{
          labels: data.map((data) => data.faculty),
          datasets: [
            {
              label: "Contributins",
              data: data.map((data) => data.contributions),
              backgroundColor: ["#236192", "#F2BA1D", "#D9D9D9"],
              borderColor: ["#236192", "#F2BA1D", "#D9D9D9"],
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              text: "Contributions by Faculty",
            },
          },
        }}
      />
    </StyledDoughnutChart>
  );
};

export default DoughnutChart;
