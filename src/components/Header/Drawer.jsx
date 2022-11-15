import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";

const Drawer = () => {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        color: "#fff",
        fontFamily: "Poppins",
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ fontFamily: "Poppins" }}>
        {[
          "Presale",
          "Staking",
          "Forum",
          "Governce",
          "SolarPresale",
          "CONNECT",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              {index === 5 ? (
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
              ) : index === 4 ? (
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
              ) : (
                <ListItemText primary={text} />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            {<MenuIcon sx={{ color: "#fff" }} />}
          </Button>
          <SwipeableDrawer
            sx={{
              ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
                backgroundColor: "#00052C",
              },
              //   fontFamily: "Poppins",
            }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Drawer;
