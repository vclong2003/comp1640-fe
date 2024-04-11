import { useEffect, useState } from "react";
import { IAvgContributionPerEvent } from "@interfaces/contribution.interfaces";
import { Bar } from "react-chartjs-2";
import contributionService from "@service/contribution";

export default function ContributionsPerEvent() {
  const [data, setData] = useState<IAvgContributionPerEvent[]>([]);

  const generateRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.8)`;
  };

  useEffect(() => {
    contributionService.getAvgContributionsPerEvent().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Bar
      data={{
        labels: data.map((data) => data.faculty),
        datasets: [
          {
            label: "Contributions/Event",
            data: data.map((data) => data.avg),
            borderRadius: 2,
            backgroundColor: data.map(() => generateRandomColor()),
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Contributions per Event",
          },
        },
        aspectRatio: 1.5,
      }}
    />
  );
}
