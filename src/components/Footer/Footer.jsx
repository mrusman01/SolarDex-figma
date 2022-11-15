import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import solorFooter from "../assests/solorFooter.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TelegramIcon from "@mui/icons-material/Telegram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box sx={{ mt: 9 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box>
            <img src={solorFooter} alt="" width="100%" />
          </Box>
        </Box>
        <Grid container>
          <Grid
            item
            xs={12}
            md={12}
            sx={{
              display: "flex",
              alignItems: { xs: "center", md: "flex-start" },
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  fontSize: "18px",
                  color: "#FFFFFF",
                  my: 2,
                }}
              >
                ABOUT
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "13px",
                  color: "#FFFFFF",
                }}
              >
                Solar is the first US based Solana Defi exchange that enables
                users to trade tokens on the Solano network. Solar plans to
                eliminate rug pulls by having our smart contracts automatically
                lock liquidity at a minimum of 6 months. Any token not using
                Solar…. Is most likely a scam
              </Typography>
            </Box>
            <Box sx={{ width: "250px" }}>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  fontSize: "18px",
                  color: "#FFFFFF",
                  my: 2,
                }}
              >
                FOLLOW US
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  //   justifyContent: "space-between",
                  gap: 3,
                  color: "#00D5D4",
                  my: 5,
                }}
              >
                <TwitterIcon sx={{ fontSize: { xs: "30px", md: "50px" } }} />
                <FacebookIcon sx={{ fontSize: { xs: "30px", md: "50px" } }} />
                <LinkedInIcon sx={{ fontSize: { xs: "30px", md: "50px" } }} />
                <TelegramIcon sx={{ fontSize: { xs: "30px", md: "50px" } }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: "'Poppins'",
                  fontSize: "12px",
                  color: "#FFFFFF",
                }}
              >
                All rights reserved @solardex 2021
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Bangers",
                  fontSize: "18px",
                  color: "#FFFFFF",
                  my: 2,
                }}
              >
                Subscribe Now
              </Typography>

              <input
                type="text"
                placeholder="write your Email"
                style={{
                  padding: "15px",
                  backgroundColor: "#1C0335",
                  border: "none",
                  color: "white",
                }}
              />
              <Button
                sx={{
                  fontFamily: "Bangers",
                  fontSize: "18px",
                  color: "#FFFFFF",
                  backgroundColor: "#00D5D4",
                  borderTopLeftRadius: "55px",
                  borderBottomLeftRadius: "55px",
                  p: 1,
                  ml: -7,
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
