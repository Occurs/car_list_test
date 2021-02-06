import React from 'react';
import AppRouter from 'router/AppRouter';
import { FiltersProvider } from 'context/filtersDictionary/FiltersProvider';
import './App.css';

function App() {
  return (
    <FiltersProvider>
      <AppRouter />
    </FiltersProvider>
  );
}

export default App;
