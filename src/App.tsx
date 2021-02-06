import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import AppRouter from 'router/AppRouter';
import { FiltersProvider } from 'context/filtersDictionary/FiltersProvider';
import { theme } from 'styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <FiltersProvider>
        <AppRouter />
      </FiltersProvider>
    </ThemeProvider>
  );
}

export default App;
