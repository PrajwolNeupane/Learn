import { createTheme } from "@mui/material";

const font = "'Poppins', sans-serif";
const theme = createTheme({
    palette:{
        primary:{
        main: "#e28743",
        light: "#eb9250"
        },
        secondary:{
        main:"#444444",
        light:"#6c757d",
        },
        text:{
          main:"#bfbfbf",
          light:"#f4f5fa"
        },
        otherColor:{
        main:"#404241"
        }
    },
    overrides: {
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: "#232f3e",
          },
        },
      },
      typography:{
        fontFamily:font,
        h1:{fontWeight:700},
        h2:{fontWeight:600},
        h3:{fontWeight:500},
        h4:{fontWeight:400},
        h5:{fontWeight:300},
        h6:{fontWeight:200}
      },
        
});
export default theme;