// Layout.js
import React, { Fragment, useState } from "react";
import ResultsPage from "../Components/AllReusableComponents/ResultsPage/ResultsPage";
const [isBeingExamined, setIsBeingExamined] = useState(true);
function Layout() {

    return (
        <Fragment>
            {isBeingExamined ? <TestLayout /> : <ResultsPage />}
        </Fragment>
    );
}

export default Layout;
