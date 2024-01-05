// Layout.js
import React, { Fragment, useState } from "react";
import ResultsPage from "../Components/AllReusableComponents/ResultsPage/ResultsPage";
import TestLayout from './TestLayout/TestLayout.jsx'
function Layout() {
    const [isBeingExamined, setIsBeingExamined] = useState(true);

    return (
        <Fragment>
            {isBeingExamined ? <TestLayout /> : <ResultsPage />}
        </Fragment>
    );
}

export default Layout;
