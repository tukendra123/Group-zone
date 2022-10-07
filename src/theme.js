import { createTheme } from '@mui/material/styles';
import { green, blue,  } from '@mui/material/colors';

export const theme = createTheme({
    palette:{
        primary:{
            main: blue[600],
            light: blue[500]
        },
        secondary:{
            main:blue[500],
        },
        otherColor:{
            main:green[500],
        }
    }
})