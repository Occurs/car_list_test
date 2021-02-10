import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "router/AppRouter";
import { FiltersProvider } from "context/FiltersProvider";
import { theme } from "styles/theme";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <FiltersProvider>
          <AppRouter />
        </FiltersProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
