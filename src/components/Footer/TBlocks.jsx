import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import googlePlay from "./img/googlePlay.png";
import appstore from "./img/appstore.png";
const TBlocks = () => {
  return (
    <Box sx={{ my: 2 }}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={12} md={8}></Grid>
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                border: "5px solid grey",
                p: 2,
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  fontSize: {
                    xs: "12px",
                    md: "22px",
                    fontWeight: 600,
                  },
                  wordSpacing: "0.15rem",
                }}
              >
                Tblocks Game World
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "13px",
                  mt: "20px",
                  wordSpacing: "0.1rem",
                }}
              >
                To play mobile, please be sure to downlaod and install our
                officaal App for Android and iOS
              </Typography>
              <Box
                sx={{
                  mt: 4,
                  mb: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <img src={googlePlay} alt="" width="140px" />

                <Button
                  sx={{
                    color: "black",
                    fontSize: "12px",
                    border: "1px solid grey",
                    px: 3,
                    width: "135px",
                    height: "30px",
                    borderRadius: "0px",
                    boxShadow: "2px 2px rgba(0,0,0,0.95)",
                  }}
                >
                  Downlaod
                </Button>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <img src={appstore} alt="" width="140px" />
                </Box>
                <Button
                  sx={{
                    color: "black",
                    fontSize: "12px",
                    border: "1px solid grey",
                    px: 3,
                    width: "135px",
                    height: "30px",
                    borderRadius: "0px",
                    boxShadow: "2px 2px rgba(0,0,0,0.95)",
                  }}
                >
                  Downlaod
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TBlocks;
