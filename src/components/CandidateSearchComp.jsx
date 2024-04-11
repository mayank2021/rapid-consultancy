import { useState } from "react";
import { InputAdornment, Stack, TextField } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SearchIcon from "@mui/icons-material/Search";
import { CandidateCard } from "./";
import { candidatesData } from "../Data/candidatesData";

const CandidateSearchComp = () => {
  const [query, setQuery] = useState("");

  const getCandidates = (data, que) => {
    if (que) {
      return data?.filter(
        (ele) =>
          ele?.name?.toLowerCase()?.includes(que?.toLowerCase()) ||
          ele?.position?.toLowerCase()?.includes(que?.toLowerCase())
      );
    }
    return data;
  };

  return (
    <Stack py={2} direction={"column"} gap={2}>
      <TextField
        size="small"
        placeholder="Search candidates..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: query?.length ? (
            <InputAdornment
              position="end"
              sx={{ cursor: "pointer" }}
              onClick={() => setQuery("")}
            >
              <CancelIcon />
            </InputAdornment>
          ) : null,
        }}
      />
      <Stack direction={"column"} gap={1.5} px={1}>
        {console.log(getCandidates(candidatesData, query), "jbcbnjcndjncd")}
        {getCandidates(candidatesData, query)?.map((candidate) => (
          <CandidateCard
            key={candidate.name}
            name={candidate.name}
            position={candidate?.position}
            color={candidate?.color}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default CandidateSearchComp;
