import { Route, Routes } from 'react-router-dom';
import React from 'react';
import WelcomePage from '../WelcomePage/WelcomePage';
function Router() {
    return (
        <div className="Router">
            <Routes>
                <Route index element={<WelcomePage />} />
                <Route path="/path" element={<component />} /> 
                             
            </Routes>
        </div>
    );
}

export default EmployeeRouter;
