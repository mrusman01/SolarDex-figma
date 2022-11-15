import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import Star from "../assests/star1.png";
import logo2 from "../assests/logo2.png";
import UploadIcon from "@mui/icons-material/Upload";
import ClipPath from "./ClipPath";
import ProgressBar from "./ProgressBar";
import votesImg from "../assests/votesImg.png";
const HeroSection = () => {
  const matchesMeida = useMediaQuery("(max-width: 700px)");
  return (
    <Box>
      <Container maxWidth="lg">
        <Grid
          container
          sx={{
            mt: { xs: 7, md: 15 },
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "flex-start",
            // gap: 12,
          }}
        >
          <Grid item xs={12} sm={12} md={7}>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: { xs: "22px", md: "32px" },
                  color: "#FFFFFF",
                }}
              >
                Solar Treasury Multisig Update [Implementation]
              </Typography>
              <Box sx={{ ml: "-10px" }}>
                <img
                  src={Star}
                  alt=""
                  style={{
                    width: matchesMeida ? "100%" : "60%",
                  }}
                />
              </Box>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  alignItems: "center",
                  flexDirection: { xs: "column", md: "row" },
                  gap: { xs: 2, md: 3 },
                }}
              >
                <Button
                  sx={{
                    fontSize: "16px",
                    fontWeight: 700,
                    color: "#ffffff",
                    backgroundColor: "#03CE8E",
                    px: 3,
                    borderRadius: "9px",
                    fontFamily: "Poppins",
                  }}
                >
                  Join
                </Button>
                <img src={logo2} alt="" />
                <Typography
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Poppins",
                      fontSize: "14px",
                      color: "#FFFFFF",
                      fontWeight: 700,
                      marginRight: "5px",
                    }}
                  >
                    Sushi by{" "}
                  </span>
                  SOLARGOV.ETH
                </Typography>
                <Button
                  sx={{
                    fontFamily: "Poppins",
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#FFFFFF",
                  }}
                >
                  <UploadIcon sx={{ color: "#ffffff", mr: "3px" }} />
                  SHARE
                </Button>
              </Box>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  textTransform: "uppercase",
                  color: "#FFFFFF",
                  mt: 3,
                  mb: 7,
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "20px",

                  color: "#FFFFFF",
                  // my: 1,
                }}
              >
                DISCUSSION
              </Typography>
              <Box sx={{ ml: "-7px" }}>
                <img src={Star} alt="" width="170px" />
              </Box>

              <ClipPath />

              <Typography
                sx={{
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: "20px",

                  color: "#FFFFFF",
                  mt: 6,
                }}
              >
                Cast your vote
              </Typography>
              <Box sx={{ ml: "-5px" }}>
                <img src={Star} alt="" width="170px" />
              </Box>
              <Stack
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection: "column",
                  gap: 2,
                  my: 7,
                }}
              >
                <Box
                  sx={{
                    border: "1px solid  rgba(111, 100, 255, 0.45)",
                    background: "#050834",
                    color: "#ffffff",
                    width: { xs: "100%", md: "400px" },
                    p: 1,
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    "&:hover": {
                      background: "#42319B",
                      cursor: "pointer",
                    },
                  }}
                >
                  Yes
                </Box>
                <Box
                  sx={{
                    border: "1px solid  rgba(111, 100, 255, 0.45)",
                    background: "#050834",
                    color: "#ffffff",
                    width: { xs: "100%", md: "400px" },
                    p: 1,
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    "&:hover": {
                      background: "#42319B",
                      cursor: "pointer",
                    },
                  }}
                >
                  No
                </Box>
                <Box
                  sx={{
                    border: "1px solid  rgba(111, 100, 255, 0.45)",
                    background: "#050834",
                    color: "#ffffff",
                    width: { xs: "100%", md: "400px" },
                    p: 1,
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 700,
                    "&:hover": {
                      background: "#42319B",
                      cursor: "pointer",
                    },
                  }}
                >
                  Abstain
                </Box>
                <Box
                  sx={{
                    border: "1px solid  rgba(111, 100, 255, 0.45)",
                    fontWeight: 700,
                    color: "#ffffff",
                    width: { xs: "100%", md: "400px" },
                    p: 1,
                    borderRadius: "9px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "&:hover": {
                      background: "#42319B",
                      cursor: "pointer",
                    },
                  }}
                >
                  Vote
                </Box>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={4.5}>
            <Box>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "300px", md: "325px" },
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
                    clipPath:
                      "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 700,
                      fontFamily: "Poppins",
                      p: 2,
                    }}
                  >
                    Information
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
                      Strategie(s)
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
                      Strategie(s)
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
                      IPFS
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
                      IPFS
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
                      Voting system
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
                      Voting system
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
                      Start date
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
                      Nov 6, 2022 07:30 AM
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
                      End date
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
                      Nov 6, 2022 07:30 AM
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  mt: "40px",
                  position: "relative",
                  width: "100%",
                  height: { xs: "250px", md: "280px" },
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
                    clipPath:
                      "polygon(89% 0, 100% 19%, 100% 100%, 0 100%, 0 0)",
                  }}
                >
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: "16px",
                      fontWeight: 700,
                      fontFamily: "Poppins",
                      p: 2,
                    }}
                  >
                    Current results
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
                      px: 2,
                      py: 1,
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", md: "14px" },

                        color: "#FFFFFF",
                        fontWeight: 700,
                      }}
                    >
                      Yes
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
                      453K SOLARP...98.11%
                    </Typography>
                  </Box>
                  <ProgressBar />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                      fontWeight: 700,
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", md: "14px" },

                        fontWeight: 700,
                        color: "#FFFFFF",
                      }}
                    >
                      No
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
                      8.7K SOLARP...1.88%
                    </Typography>
                  </Box>
                  <ProgressBar />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      px: 2,
                    }}
                  >
                    {" "}
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        fontSize: { xs: "10px", md: "14px" },

                        // textTransform: "uppercase",
                        color: "#FFFFFF",
                        fontWeight: 700,
                      }}
                    >
                      Abstain
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
                      26 SOLARP...0.01%
                    </Typography>
                  </Box>
                  <ProgressBar />
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

                        color: "#FFFFFF",
                        fontWeight: 700,
                      }}
                    >
                      Quorum
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
                      462K / 5M
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box sx={{ mt: "40px", mb: 1 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: "430px", md: "460px" },
                    background: "rgba(111, 100, 255, 0.45)",
                    WebkitClipPath:
                      "polygon(76% 0, 100% 31%, 100% 100%, 0 100%, 0 0)",
                    clipPath:
                      "polygon(88% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
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
                      clipPath:
                        "polygon(88% 0, 100% 15%, 100% 100%, 0 100%, 0 0)",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#ffffff",
                        fontSize: "16px",
                        fontWeight: 700,
                        fontFamily: "Poppins",
                        py: 2,
                        px: 2,
                      }}
                    >
                      Votes
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
                        px: "10px",
                        pt: 4,
                        pb: 2,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        px: "10px",
                        py: 2,
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        px: "10px",
                        py: 2,
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        px: "10px",
                        py: 2,
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        px: "10px",
                        py: 2,
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        px: "10px",
                        py: 2,
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          display: "flex",
                          alignItem: "center",
                          // justifyContent: "center",
                          gap: "5px",
                        }}
                      >
                        <img src={votesImg} alt="" />
                        0x8CCb8.....5D6c9F5
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        Yes
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: { xs: "9px", md: "14px" },
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        329K SUSHIP...
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
                        width: "100%",
                        backgroundColor: "rgba(111, 100, 255, 0.45)",
                        height: "1px",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: "10px",
                        py: { xs: 1, md: 2 },
                      }}
                    >
                      {/* <img src={votesImg} alt="" /> */}

                      <Typography
                        sx={{
                          fontFamily: "Poppins",
                          fontSize: "14px",
                          textTransform: "uppercase",
                          color: "#FFFFFF",
                          fontWeight: 700,
                        }}
                      >
                        View More
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
