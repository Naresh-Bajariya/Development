import React from 'react';
import { Route, Routes } from 'react-router-dom';
import IntroFunctionalCompo from './Introfunctionalcompo';
// import { IntroFunctionalCompo } from './Introfunctionalcompo';
import Usestate from './usestate';
const FunctionalCompoRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<IntroFunctionalCompo/>}>
                    <Route path="usestate" element={<Usestate />} />
                </Route>

            </Routes>
        </>
    );
};

export default FunctionalCompoRouter;