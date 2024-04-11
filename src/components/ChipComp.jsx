import Chip from "@mui/material/Chip";

const ChipComp = ({ label }) => {
  const getLabelColor = (label) => {
    if (label?.toLowerCase()?.includes("pending")) return "warning";
    else if (label?.toLowerCase()?.includes("approved")) return "success";
    else return "error";
  };

  return (
    <Chip
      sx={{ textTransform: "capitalize" }}
      label={label}
      color={getLabelColor(label)}
    />
  );
};

export default ChipComp;
