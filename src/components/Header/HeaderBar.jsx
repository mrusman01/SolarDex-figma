import { Box, Button, Container, Hidden } from "@mui/material";
import React from "react";
import Logo from "../assests/solorLogo.png";
import Drawer from "./Drawer";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <Box sx={{}}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Box>
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={Logo} alt="" />
            </Link>
          </Box>
          <Hidden mdDown>
            <Box
              sx={{
                display: "flex",
                gap: "45px",
              }}
            >
              {" "}
              <Box sx={{ display: "flex", gap: "51px" }}>
                <Button
                  sx={{
                    fontFamily: "Poppins",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  Persale
                </Button>
                <Button
                  sx={{
                    fontFamily: "Poppins",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  <Link
                    to="/Staking"
                    style={{ textDecoration: "none", color: "#ffffff" }}
                  >
                    Staking
                  </Link>
                </Button>

                <Button
                  sx={{
                    fontFamily: "Poppins",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  Forum
                </Button>
                <Button
                  sx={{
                    fontFamily: "Poppins",
                    color: "#FFFFFF",
                    fontSize: "13px",
                  }}
                >
                  Governce
                </Button>
              </Box>
              <Box sx={{ display: "flex", gap: 2 }}>
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "12px",
                    border: "2px solid #ffffff",
                    borderRadius: "9px",
                    height: "43px",
                    width: "130px",
                  }}
                >
                  SolorPresale
                </Button>
                <Button
                  sx={{
                    color: "#ffffff",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "12px",
                    borderRadius: "9px",
                    height: "43px",
                    width: "130px",
                    background:
                      "radial-gradient(267.56% 2139.85% at 3.42% 30.43%, #AD00FF 0%, #26D2D1 100%) ",
                  }}
                >
                  ConnectWallet
                </Button>
              </Box>
            </Box>
          </Hidden>
          <Hidden mdUp>
            <Drawer />
          </Hidden>
        </Box>
      </Container>
    </Box>
  );
};

export default HeaderBar;
