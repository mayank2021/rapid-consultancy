import { Stack, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

const ProfileMenu = () => {
  return (
    <Stack direction={"row"} alignItems={"center"} gap={1}>
      <PersonIcon sx={{ fontSize: "30px" }} />
      <Stack>
        <Typography
          sx={{ fontSize: "0.7rem", fontWeight: "bold", color: "#222" }}
        >
          Good Morning
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", fontWeight: "bold" }}>
          Jhon Doe
        </Typography>
      </Stack>
    </Stack>
  );
};

export default ProfileMenu;
