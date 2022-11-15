import React from "react";
import { Box, Button, Typography } from "@mui/material";

const ClipPath = () => {
  return (
    <div>
      {" "}
      <Box sx={{ my: 2 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: "125px", md: "105px" },

            background: "rgba(111, 100, 255, 0.45)",

            WebkitClipPath: "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
            clipPath: "polygon(89% 0, 100% 38%, 100% 100%, 0 100%, 0 0)",
            // my: "20px",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              px: { xs: "25px", md: "30px" },
              py: "20px",
              top: "1px",
              left: "1px",
              right: "1px",
              bottom: "1px",
              background: "#0A0B3E",
              WebkitClipPath:
                "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
              clipPath: "polygon(89% 0, 100% 38%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <Typography
              sx={{
                color: "#ffffff",
                fontSize: { xs: "10px", md: "16px" },
                fontWeight: 700,
                fontFamily: "Poppins",
              }}
            >
              UPDATE TREASURY MULTISIG SIGINERS
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",

                fontSize: { xs: "10px", md: "14px" },
                textTransform: "uppercase",
                color: "#FFFFFF",
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,{" "}
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default ClipPath;
