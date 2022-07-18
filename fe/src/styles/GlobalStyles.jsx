import { createTheme } from '@mui/material';

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
          fontFamily: 'Noto Sans KR',
        },
        button: {
          border: 'none',
          outline: 'none',
          background: 'transparent',
          cursor: 'pointer',
          fontFamily: 'Noto Sans KR',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});
