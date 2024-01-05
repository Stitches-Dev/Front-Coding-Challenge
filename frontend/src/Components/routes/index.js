import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
export default function AllRoutes() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>

        </Routes>
    </BrowserRouter>
    </div>
  )
}
