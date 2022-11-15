import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import BasicTabs from "./TabsBox";
import star1 from "../assests/star1.png";

const Staking = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");
  return (
    <Box sx={{ mt: 7 }}>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Grid item xs={12} md={7}>
            <BasicTabs />
            <Typography
              sx={{
                fontSize: "20px",
                color: "#ffffff",
                fontWeight: 700,
                fontFamily: "Poppins",
                mt: 9,
              }}
            >
              How its Work
            </Typography>
            <img
              src={star1}
              alt=""
              style={{
                width: matchesMeida ? "100%" : "30%",
                marginLeft: matchesMeida ? "1px" : "-7px",
              }}
            />

            {/* ////////////// */}
            <Box
              sx={{
                display: "flex",
                alignItem: "center",
                justifyContent: "space-between",
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Box sx={{ my: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "200px" },
                    height: { xs: "205px", md: "210px" },

                    background: "rgba(111, 100, 255, 0.45)",

                    WebkitClipPath:
                      "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                    clipPath:
                      "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",

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
                      clipPath:
                        "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#AB02FE",
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      Step1
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontSize: "12px",
                        color: "#ffffff",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ my: 3 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "200px" },
                    height: { xs: "205px", md: "210px" },

                    background: "rgba(111, 100, 255, 0.45)",

                    WebkitClipPath:
                      "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                    clipPath:
                      "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
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
                      background: "#44329B",
                      WebkitClipPath:
                        "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                      clipPath:
                        "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#AB02FE",
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      Step2
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontSize: "12px",
                        color: "#ffffff",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ my: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: "100%", md: "200px" },
                    height: { xs: "205px", md: "210px" },

                    background: "rgba(111, 100, 255, 0.45)",

                    WebkitClipPath:
                      "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                    clipPath:
                      "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",

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
                      clipPath:
                        "polygon(88% 0, 100% 14%, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontWeight: 600,
                        fontSize: "20px",
                        color: "#AB02FE",
                        display: "flex",
                        alignItem: "center",
                        justifyContent: "center",
                      }}
                    >
                      Step3
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Poppins'",
                        fontSize: "12px",
                        color: "#ffffff",
                      }}
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s,{" "}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              gap: 4,
              mt: 2,
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "240px", md: "270px" },
                background: "rgba(111, 100, 255, 0.45)",
                WebkitClipPath:
                  "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                // my: "20px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  // px: "30px",
                  // py: "20px",
                  top: "1px",
                  left: "1px",
                  right: "1px",
                  bottom: "1px",
                  background: "#0A0B3E",
                  WebkitClipPath:
                    "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                  clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "12px", md: "16px" },
                    fontWeight: 700,
                    fontFamily: "Poppins",
                    p: 2,
                  }}
                >
                  Solar Details
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Solar Price{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Stakable{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Reward{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Apy{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    78%
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "240px", md: "270px" },
                background: "rgba(111, 100, 255, 0.45)",
                WebkitClipPath:
                  "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                // my: "20px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  // px: "30px",
                  // py: "20px",
                  top: "1px",
                  left: "1px",
                  right: "1px",
                  bottom: "1px",
                  background: "#0A0B3E",
                  WebkitClipPath:
                    "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                  clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "12px", md: "16px" },
                    fontWeight: 700,
                    fontFamily: "Poppins",
                    p: 2,
                  }}
                >
                  Solar Details
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Solar Price{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Stakable{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Reward{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Apy{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    78%
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "240px", md: "270px" },
                background: "rgba(111, 100, 255, 0.45)",
                WebkitClipPath:
                  "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                // my: "20px",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  // px: "30px",
                  // py: "20px",
                  top: "1px",
                  left: "1px",
                  right: "1px",
                  bottom: "1px",
                  background: "#0A0B3E",
                  WebkitClipPath:
                    "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                  clipPath: "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                }}
              >
                <Typography
                  sx={{
                    color: "#ffffff",
                    fontSize: { xs: "12px", md: "16px" },
                    fontWeight: 700,
                    fontFamily: "Poppins",
                    p: 2,
                  }}
                >
                  Solar Details
                </Typography>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Solar Price{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Stakable{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000000
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Reward{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    1000{" "}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: "100%",
                    backgroundColor: "rgba(111, 100, 255, 0.45)",
                    height: "1px",
                  }}
                ></Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  {" "}
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                    }}
                  >
                    Apy{" "}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: { xs: "10px", md: "14px" },
                      textTransform: "uppercase",
                      color: "#FFFFFF",
                      fontWeight: 700,
                    }}
                  >
                    78%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Staking;
