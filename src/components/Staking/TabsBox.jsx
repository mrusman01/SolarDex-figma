import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import styled from "styled-components";
import stackingArrow from "../assests/stackingArrow.png";

const tabsStyles = {
  "& .Mui-selected": {
    background: "rgba(151, 70, 254, 0.33)",
    color: "white !important ",
  },
  "& .MuiTabs-indicator": {
    backgroundColor: "transparent",
  },
  backgroundColor: "transparent",
  mb: "1px",
};
const tabStyles = {
  backgroundColor: "transparent",
  fontFamily: "Poppins",
  fontWeight: 700,
  fontSize: { xs: "10px", md: "16px" },
  color: "#FFFFFF !important",
  px: { xs: "15px", md: "36px" },
  py: { xs: "10px", md: "14px" },
  borderRadius: "9px",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 2 }}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: "380px", md: "400px" },

          background: "rgba(111, 100, 255, 0.45)",

          WebkitClipPath: "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
          clipPath: "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
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
            WebkitClipPath: "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
            clipPath: "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <Tabs
              sx={tabsStyles}
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab sx={tabStyles} label="Stake" {...a11yProps(0)} />
              <Tab sx={tabStyles} label="Unstake" {...a11yProps(1)} />
            </Tabs>

            <Box
              sx={{
                width: "100%",
                backgroundColor: "rgba(111, 100, 255, 0.45)",
                height: "1px",
              }}
            ></Box>
            <TabPanel value={value} index={0}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Poppins",
                  }}
                >
                  From
                </Typography>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Poppins",
                    fontWeight: 700,
                  }}
                >
                  Max
                </Typography>
              </Box>

              <Box
                sx={{
                  border: "2px solid #3A2B87",
                  mt: 2,
                  mb: 4,
                  borderRadius: "9px",
                  p: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "9px", md: "12px" },
                    fontFamily: "Poppins",
                    background: "rgba(151, 70, 254, 0.33)",
                    p: 1,
                  }}
                >
                  $Solar
                </Button>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "9px", md: "12px" },
                    fontFamily: "Poppins",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  100,000,000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "50%",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: "12px",
                    fontFamily: "Poppins",
                  }}
                >
                  To
                </Typography>
                <Box>
                  <img src={stackingArrow} alt="" />
                </Box>
              </Box>
              <Box
                sx={{
                  border: "2px solid #3A2B87",

                  mt: 2,
                  mb: 4,
                  borderRadius: "9px",
                  p: "2px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "9px", md: "12px" },
                    fontFamily: "Poppins",
                    background: "rgba(151, 70, 254, 0.33)",
                    p: 1,
                  }}
                >
                  $VSolar{" "}
                </Button>
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "9px", md: "12px" },
                    fontFamily: "Poppins",
                    fontWeight: 700,
                  }}
                >
                  {" "}
                  100,000,000
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  sx={{
                    px: { xs: "30px", md: "75px" },
                    py: { xs: "9px", md: "13px" },
                    background:
                      "radial-gradient(267.56% 2139.85% at 3.42% 30.43%, #AD00FF 0%, #26D2D1 100%) ",
                    borderRadius: "8px",
                    fontFamily: "'Poppins'",
                    fontWeight: 700,
                    fontSize: { xs: "9px", md: "12px" },
                    color: "#FFFFFF",
                  }}
                >
                  Buy $vSolar
                </Button>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Poppins'",
                  fontWeight: 700,
                  fontSize: { xs: "9px", md: "12px" },
                  color: "#FFFFFF",
                }}
              >
                Unlocked Amount
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 2,
                }}
              >
                {" "}
                <Box
                  sx={{
                    borderTop: "1px solid #ffffff",
                    borderRight: "1px solid #ffffff",
                    borderLeft: "1px solid #ffffff",
                    width: { xs: "100%", md: "90%" },
                    height: "37px",
                  }}
                ></Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  mt: 1,
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins'",
                    fontSize: { xs: "9px", md: "14px" },
                    color: "#FFFFFF",
                    ml: { xs: "1", md: 3 },
                  }}
                >
                  0
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins'",
                    fontSize: { xs: "9px", md: "14px" },
                    color: "#FFFFFF",
                  }}
                >
                  100,000,000
                </Typography>
              </Box>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  color: "#ffffff",
                  fontSize: { xs: "7px", md: "14px" },
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  mt: 2,
                  mb: 3,
                }}
              >
                USDT BALANCE: 75858
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#211E63",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "'Poppins'",

                    fontSize: { xs: "9px", md: "12px" },
                    color: "#FFFFFF",
                  }}
                >
                  Transaction fee
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Poppins'",
                    fontWeight: 700,
                    fontSize: { xs: "9px", md: "12px" },
                    color: "#FFFFFF",
                  }}
                >
                  0.543 USDT
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 4,
                }}
              >
                <Button
                  sx={{
                    px: { xs: "25px", md: "75px" },
                    py: { xs: "9px", md: "13px" },
                    background:
                      "radial-gradient(267.56% 2139.85% at 3.42% 30.43%, #AD00FF 0%, #26D2D1 100%) ",
                    borderRadius: "8px",
                    fontFamily: "'Poppins'",
                    fontWeight: 700,
                    fontSize: { xs: "9px", md: "12px" },
                    color: "#FFFFFF",
                  }}
                >
                  Unstake
                </Button>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
