import React from "react";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Page1 from "../../pages/Page1/Page1";
import Page2 from "../../pages/Page2/Page2";
import DynamicQuestionPage from "../../pages/DynamicQuestionPage/DynamicQuestionPage";
export default function AllRoutes() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home /> }/>
            <Route path="/page1" element={<Page1 />}/>
            <Route path="/page2" element={<Page2 />}/>
            <Route path="/question/:questionId" element={<DynamicQuestionPage />} />

        </Routes>
    </BrowserRouter>
    </div>
  )
}
