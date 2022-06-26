import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#f14140',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Open Sans", "sans-serif"',
    fontSize: 12,
    button: {
      fontWeight: 700,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: '1.1rem',
    },
    body1: {
      fontWeight: 400,
      fontSize: '.9rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '.8rem',
    },
  },
});
