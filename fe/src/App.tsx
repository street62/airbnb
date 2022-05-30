import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { theme as MuiGlobalTheme } from 'styles/GlobalStyles';
import { theme as ScGlobalTheme } from 'styles/theme';

import Router from 'Router';
import { PersonnalProvider } from 'contexts/PersonnelContext';
import { PriceProvider } from 'contexts/PriceContext';
import { PeriodPriovider } from 'contexts/periodContext';

function App() {
  return (
    <MuiThemeProvider theme={MuiGlobalTheme}>
      <CssBaseline />
      <StyledThemeProvider theme={ScGlobalTheme}>
        <PeriodPriovider>
          <PersonnalProvider>
            <PriceProvider>
              <Router />
            </PriceProvider>
          </PersonnalProvider>
        </PeriodPriovider>
      </StyledThemeProvider>
    </MuiThemeProvider>
  );
}

export default App;
