import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Components/Header/Header';
import LandingPage from './Pages/Landing';
import TestPage from './Pages/Test';
import './App.css';

const theme = createTheme(); // Customize the theme here

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/test" element={<TestPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
