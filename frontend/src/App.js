import "./App.css";
import { Navigate, Route, Routes, Router } from "react-router-dom";
import Layout from '../src/Layout/Layout.jsx'
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
