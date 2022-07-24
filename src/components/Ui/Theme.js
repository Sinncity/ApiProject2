import { createTheme } from "@mui/material/styles";

const colorBlack = "#000";
const colorPurple = "#7b1fa9";

export default createTheme({
  palette: {
    //     mode: "dark",
    common: {
      black: `${colorBlack}`,
      purple: `${colorPurple}`,
    },
    primary: {
      main: `${colorBlack}`,
    },
    secondary: {
      main: `${colorPurple}`,
    },
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    button1: {
      boxshadow: "0.5rem 2rem 2rem",
      color: "rgb(40, 86, 155)",
      fontfamily: " Pacifico",
      fontsize: "0.4rem",
    },
  },
});
