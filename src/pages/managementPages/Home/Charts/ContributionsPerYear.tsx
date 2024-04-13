import { IContributionsByFacultyYear } from "@interfaces/contribution.interfaces";
import { Box, Grid, MenuItem, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import contributionService from "@service/contribution";
import { Line } from "react-chartjs-2";
import { monthName } from "@utils/date.utils";

export default function ContributionsPerYear() {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState<number>(currentYear);
  const [data, setData] = useState<IContributionsByFacultyYear[]>([]);

  const chartData = {
    labels: data[0]?.data.map((item) => monthName(item.month)),
    datasets: data.map((faculty) => ({
      label: faculty.faculty,
      data: faculty.data.map((item) => item.contributions),
    })),
  };

  useEffect(() => {
    contributionService.getContributionsPerYear({ year }).then((data) => {
      setData(data);
    });
  }, [year]);

  return (
    <Box>
      {/* Year Selector ----------------------------------------- */}
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid item>Contributions in</Grid>
        <Grid item>
          <TextField
            value={year}
            onChange={(e) => setYear(Number(e.target.value))}
            select
          >
            <MenuItem value={currentYear}>{currentYear}</MenuItem>
            <MenuItem value={currentYear - 1}>{currentYear - 1}</MenuItem>
            <MenuItem value={currentYear - 2}>{currentYear - 2}</MenuItem>
          </TextField>
        </Grid>
      </Grid>
      {/* Chart -------------------------------------------------- */}
      <Box>
        <Line
          // Update the key to force the chart to re-render
          key={chartData.datasets.length}
          data={chartData}
          options={{
            aspectRatio: 1.5,
          }}
        />
      </Box>
    </Box>
  );
}
