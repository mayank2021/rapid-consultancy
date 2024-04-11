import { Stack } from "@mui/material";
import { Header, Sidebar } from "./";

const PageLayout = ({ children }) => {
  return (
    <Stack direction={"row"}>
      <Stack
        sx={{
          width: "19%",
          display: { lg: "inline", md: "none", sm: "none", xs: "none" },
        }}
      >
        <Sidebar />
      </Stack>
      <Stack
        height={"100vh"}
        direction={"column"}
        alignItems={"flex-end"}
        sx={{
          top: "0px",
          backgroundColor: "white",
          px: 1,
          display: { lg: "91%", md: "100%", sm: "100%" },
        }}
      >
        <Stack
          sx={{
            width: "100%",
          }}
        >
          <Header />
        </Stack>
        <Stack width="100%">{children}</Stack>
      </Stack>
    </Stack>
  );
};

export default PageLayout;
