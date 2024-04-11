import { Box, IconButton, Stack, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { SidebarSmall, ProfileMenu } from "./";

const Header = () => {
  return (
    <Stack direction={"row"} justifyContent={"space-between"} py={1}>
      <Stack direction={"row"} alignItems={"center"}>
        <Box sx={{ display: { xl: "none", lg: "none", md: "inline" } }}>
          <SidebarSmall />
        </Box>
        <Typography
          sx={{ fontSize: "1.2rem", display: "flex", alignItems: "center" }}
        >
          Aprove Timer
        </Typography>
      </Stack>
      <Stack direction="row" gap={4}>
        <ProfileMenu />
        <IconButton>
          <NotificationsIcon sx={{ color: "#FF204E" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
