import { Box, Stack, Typography } from "@mui/material";

const CandidateCard = ({ name, position, color }) => {
  const firstLetter = name?.slice(0, 1)?.toUpperCase();
  return (
    <Stack direction={"row"} gap={1} alignItems={"center"}>
      <Box
        sx={{
          width: 32,
          height: 32,
          background: color,
          borderRadius: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "1rem", fontWeight: "bold", color: "#fff" }}
        >
          {firstLetter}
        </Typography>
      </Box>
      <Stack>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {name}
        </Typography>
        <Typography sx={{ fontSize: "0.8rem", textTransform: "capitalize" }}>
          {position}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CandidateCard;
