import { Box, Stack, Typography, Button } from "@mui/material";
import { SidebarComp } from "../cutsomComp";
import { routes } from "./routesData";

const Sidebar = () => {
  const buttonStyles = {
    fontSize: "0.8rem",
    color: "#696969",
    display: "flex",
    justifyContent: "left",
    ml: 2,
    textTransform: "capitalize",
  };

  return (
    <SidebarComp>
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
      <Stack>
        {routes?.map((link, ind) => (
          <Button
            key={ind}
            sx={buttonStyles}
            startIcon={<link.icon fontSize="large" sx={{ color: "#FF204E" }} />}
          >
            {link.title}
          </Button>
        ))}
      </Stack>
    </SidebarComp>
  );
};

export default Sidebar;
