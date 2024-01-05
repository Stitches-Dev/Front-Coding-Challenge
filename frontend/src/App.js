import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Layout from '../src/Layout/Layout.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
