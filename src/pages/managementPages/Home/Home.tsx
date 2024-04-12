import { defaults } from "chart.js/auto";
import { Grid } from "@mui/material";
import ContributionsPerFaculty from "./Charts/ContributionsPerFaculty";
import ContributionsPerYear from "./Charts/ContributionsPerYear";
import ContributionsPerStudent from "./Charts/ContributionsPerStudent";
import ContributionsPerEvent from "./Charts/ContributionsPerEvent";

defaults.maintainAspectRatio = true;
defaults.responsive = true;
defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const Home = () => {
  return (
    <Grid container spacing={2} sx={{ minHeight: "100vh" }}>
      <Grid item xs={8}>
        <ContributionsPerYear />
      </Grid>
      <Grid item xs={4}>
        <ContributionsPerStudent />
      </Grid>
      <Grid item xs={6}>
        <ContributionsPerFaculty />
      </Grid>
      <Grid item xs={6}>
        <ContributionsPerEvent />
      </Grid>
    </Grid>
  );
};

export default Home;
/*
 <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <h2>Dashboard</h2>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "40px",
          "@media only screen and (max-width: 600px)": {
            display: "block",
          },
        }}
      >
        <Box
          sx={{
            width: "30%",
            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.1)",
            height: 240,
            borderRadius: 2,
            "@media only screen and (max-width: 600px)": {
              width: "100%",
            },
          }}
        >
         
        </Box>
        <Box
          sx={{
            width: "65%",
            boxShadow: "3px 3px 6px rgba(0, 0, 0, 0.1)",
            height: 240,
            borderRadius: 2,
            "@media only screen and (max-width: 600px)": {
              width: "100%",
              marginTop: 2,
            },
          }}
        >
          <BarChart sourceData={sourceData} />
        </Box>
      </Box>
    </>
*/
