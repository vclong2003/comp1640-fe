import { IContributionsByFacultyYear } from "@interfaces/contribution.interfaces";
import { Box, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import contributionService from "@service/contribution";
import { Bar } from "react-chartjs-2";
import { monthName } from "@utils/date.utils";

export default function ContributionsPerYear() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(currentYear);
  const [data, setData] = useState<IContributionsByFacultyYear[]>([]);

  const generateRandomColor = () => {
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${
      Math.random() * 255
    }, 0.8)`;
  };

  const chartData = {
    labels: data[0]?.data.map((item) => monthName(item.month)),
    datasets: data.map((faculty) => ({
      label: faculty.faculty,
      data: faculty.data.map((item) => item.contributions),
      backgroundColor: generateRandomColor(),
    })),
  };

  useEffect(() => {
    contributionService.getContributionsPerYear({ year }).then((data) => {
      setData(data);
    });
  }, [year]);

  console.log(data);

  return (
    <Box>
      {/* Year Selector ----------------------------------------- */}
      <TextField
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
        select
      >
        <MenuItem value={currentYear}>{currentYear}</MenuItem>
        <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>
        <MenuItem value={currentYear - 2}>{currentYear - 2}</MenuItem>
      </TextField>
      {/* Chart -------------------------------------------------- */}
      <Box>
        <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                text: "Monthly contributions by Faculty",
              },
            },
            aspectRatio: 2,
          }}
        />
      </Box>
    </Box>
  );
}