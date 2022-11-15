import React from "react";
import { styled } from "@mui/material/styles";
import CircularProgress, {
  circularProgressClasses,
} from "@mui/material/CircularProgress";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { Box, Stack, Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: "9px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    background: theme.palette.grey[theme.palette.mode === "red" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    background:
      theme.palette.mode === "light"
        ? "linear-gradient(90.09deg, #AC01FE 22.64%, #7754EC 95.28%)"
        : "white",
  },
}));

// Inspired by the former Facebook spinners.
function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={30}
        thickness={4}
        {...props}
        value={100}
      />
    </Box>
  );
}

const ProgressBar = () => {
  return (
    <div>
      {" "}
      <Box sx={{ px: 2 }}>
        {" "}
        <Box sx={{ width: "100%", my: 1 }}>
          <BorderLinearProgress variant="determinate" value={60} />
        </Box>
      </Box>
    </div>
  );
};

export default ProgressBar;
