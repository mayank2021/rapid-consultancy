import { Stack, Typography } from "@mui/material";
import {
  PageLayout,
  ActionCard,
  CandidateSearchComp,
  TableComponent,
} from "./components";
import { actionCardData } from "./Data/actionCardsData";
import { timesheetHeadData, timesheetData } from "./Data/timesheetData";

function App() {
  return (
    <PageLayout>
      <Stack direction={"row"} gap={1} flexWrap={"wrap"} py={1}>
        {actionCardData?.map((ele) => (
          <ActionCard key={ele.title} card={ele} />
        ))}
      </Stack>
      <Stack direction={"row"} gap={4}>
        <Stack width={"25%"}>
          <CandidateSearchComp />
        </Stack>
        <Stack py={2} width={"75%"}>
          <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold", mb: 1 }}>
            All Timesheet
          </Typography>
          <TableComponent head={timesheetHeadData} rows={timesheetData} />
        </Stack>
      </Stack>
    </PageLayout>
  );
}

export default App;
