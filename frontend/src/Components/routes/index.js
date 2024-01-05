import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Page1 from "../../pages/Page1/Page1";
export default function AllRoutes() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/page1" element={<Page1 />}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}
