import { Route, Routes } from 'react-router-dom';

import React from 'react';
import ProgressBar from '../../Components/AllReusableComponents/ProgressBar/ProgressBar.jsx'
import AnimatedImage from '../../Components/AllReusableComponents/AnimatedImage/AnimatedImage.jsx'
import TellUsAboutYourself from '../../Components/AllReusableComponents/TellUsAboutYourself/TellUsAboutYourself.jsx';
import WelcomePage from '../../Components/AllReusableComponents/WelcomePage/WelcomePage.jsx'
import TestQuestions from '../../Components/AllReusableComponents/TestQuestions/TestQuestions.jsx'
import EndOfTest from '../../Components/AllReusableComponents/EndOfTest/EndOfTest.jsx'
function Router() {
    return (
        <>
            <div className="Router">
                <Routes>
                    <Route index element={<WelcomePage />} />
                    <Route path="/TellUsAboutYourself" element={<TellUsAboutYourself />} />
                    <Route path="/TestQuestions" element={<TestQuestions />} />
                    <Route path="/EndOfTest" element={<EndOfTest />} />
                </Routes>
                <ProgressBar />
                <AnimatedImage />
            </div>
        </>
    );
}

export default Router;
