import { Paper, Stack, Typography } from "@mui/material";

const ActionCard = ({ card }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: 1,
        px: 1.5,
        border: "1px solid rgba(0,0,0,0.3)",
        flexGrow: 1,
        minWidth: "24%",
      }}
    >
      <Stack>
        <Typography sx={{ fontSize: "1rem", textTransform: "capitalize" }}>
          {card?.title}
        </Typography>
        <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>
          {card?.value}
        </Typography>
      </Stack>
      <card.icon sx={{ color: card.color }} />
    </Paper>
  );
};

export default ActionCard;
