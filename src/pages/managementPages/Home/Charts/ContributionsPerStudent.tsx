import { IAvgContributionsPerStudent } from "@interfaces/contribution.interfaces";
import { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import contributionService from "@service/contribution";

export default function ContributionsPerStudent() {
  const [data, setData] = useState<IAvgContributionsPerStudent[]>([]);

  const generateRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.8)`;
  };

  useEffect(() => {
    contributionService.getAvgContributionsPerStudent().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Doughnut
      data={{
        labels: data.map((data) => data.faculty),
        datasets: [
          {
            label: "Contributions/Student",
            data: data.map((data) => data.avg),
            backgroundColor: data.map(() => generateRandomColor()),
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Contributions per Student",
          },
        },
        aspectRatio: 1,
      }}
    />
  );
}
