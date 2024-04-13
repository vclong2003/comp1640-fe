import { ITotalContributionsByFaculty } from "@interfaces/contribution.interfaces";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import contributionService from "@service/contribution";

export default function ContributionsPerFaculty() {
  const [data, setData] = useState<ITotalContributionsByFaculty[]>([]);

  useEffect(() => {
    contributionService.getTotalContributionsByFaculty().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Bar
      data={{
        labels: data.map((data) => data.faculty),
        datasets: [
          {
            label: "Published",
            data: data.map((data) => data.published),
            backgroundColor: "#236192",
            borderRadius: 2,
          },
          {
            label: "Not Published",
            data: data.map((data) => data.not_published),
            backgroundColor: "#FFA500",
            borderRadius: 2,
          },
        ],
      }}
      options={{
        plugins: {
          title: {
            text: "Contributions by Faculty",
          },
        },
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true,
          },
        },
        aspectRatio: 1.5,
      }}
    />
  );
}
