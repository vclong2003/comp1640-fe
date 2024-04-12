import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";
import Landing from "../../assets/images/landing.jpg";
import { Box, Button, Typography } from "@mui/material";
export default function LandingPage() {
  const { user } = useSelector((state: RootState) => state.userState);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      {user && <Navigate to="/home" />}
      <img
        src={Landing}
        alt="Landing"
        style={{
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          objectFit: "cover",
          position: "absolute",
        }}
      />
      <Box
        sx={{
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h1" sx={{ color: "white", fontWeight: "bold" }}>
          ALHKQ
        </Typography>
        <Link to="/login">
          <Button
            sx={{
              width: "320px",
              mt: 10,
              height: "36px",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
              borderRadius: "24px",
              backgroundColor: "#df6a2e",
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                color: "#df6a2e",
                backgroundColor: "white",
                boxShadow: "0 4px 8px #df6a2e",
                transform: "translateY(-3px)",
              },
            }}
          >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button
            sx={{
              width: "320px",
              mt: 3,
              height: "36px",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              borderRadius: "24px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "box-shadow 0.3s, transform 0.3s",
              "&:hover": {
                color: "black",
                backgroundColor: "white",
                boxShadow: "0 4px 8px #df6a2e",
                transform: "translateY(-3px)",
              },
            }}
          >
            Register
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
