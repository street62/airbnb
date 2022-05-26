import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme as MuiGlobalTheme } from 'styles/GlobalStyles';
import { theme as ScGlobalTheme } from 'styles/theme';

import Router from 'Router';

function App() {
  return (
    <MuiThemeProvider theme={MuiGlobalTheme}>
      <CssBaseline />
      <StyledThemeProvider theme={ScGlobalTheme}>
        <Router />
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
