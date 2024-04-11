import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { PersonAddAlt } from "@mui/icons-material";
import { Laptop } from "@mui/icons-material";
import { UploadFile } from "@mui/icons-material";
export const routes = [
  {
    icon: DashboardOutlinedIcon,
    title: "dashboard",
    link: "/",
  },
  {
    icon: PersonAddAlt,
    title: "add candidates",
    link: "/users",
  },
  {
    icon: DashboardOutlinedIcon,
    title: "assignment dashboard",
    link: "/map",
  },
  {
    icon: ListAltIcon,
    title: "my timesheet",
    link: "/devices",
  },
  {
    icon: UploadFile,
    title: "approve timesheet",
    link: "/livestocks",
  },
  {
    icon: Laptop,
    title: "login to HRMS ",
    link: "/alerts",
  },
];
