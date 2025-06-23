import React from 'react';
import { AppProvider } from './context/AppContext';
import { Router } from './components/Router';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;