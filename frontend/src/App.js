import { Router } from "express";
import "./App.css";
import WelcomePage from "./Components/WelcomePage/WelcomePage.jsx";
import { Navigate, Route, Routes } from "react-router";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />} />
      </Routes>
    </Router>
  )
}

export default App;
