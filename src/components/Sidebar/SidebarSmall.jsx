import * as React from "react";
import { Box, SwipeableDrawer, Button, List, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { routes } from "./routesData";

export default function SidebarSmall() {
  const [state, setState] = React.useState({
    left: false,
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

  const buttonStyles = {
    fontSize: "0.8rem",
    color: "#696969",
    display: "flex",
    justifyContent: "left",
    ml: 2,
    textTransform: "capitalize",
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {routes?.map((ele, ind) => (
          <Button
            key={ind}
            sx={buttonStyles}
            startIcon={<ele.icon fontSize="large" sx={{ color: "#FF204E" }} />}
          >
            {ele.title}
          </Button>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            startIcon={<MenuIcon fontSize="large" sx={{ color: "#222" }} />}
            onClick={toggleDrawer(anchor, true)}
          />
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 1,
                py: 2,
                gap: 1,
              }}
            >
              <Box
                component="img"
                sx={{ width: 35 }}
                alt="logo"
                src={
                  "https://images-na.ssl-images-amazon.com/images/I/81aYKQwTPIL.png"
                }
              />
              <Typography
                sx={{
                  fontSize: "1.2rem",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  fontWeight: "bold",
                }}
              >
                Rapid Tech
              </Typography>
            </Box>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
