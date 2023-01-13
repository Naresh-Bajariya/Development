import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
// import Header from './Component/Header';
import Mainpage from './Component/01mainpage';
import AboutCompo from './Component/About';
import ContactCompo from './Component/contact';
import Examplecompo from './Component/02example.jsx';
// import ExampleCompo from './Component/02example.jsx';
// import IntroClassCompoRout from './Component/classcomponent/classRouter';
// import FunctionalCompoRouter from './Component/functionalcomponent/functionalRouter';
// import IntroClassCompo from './Component/classcomponent/introClassCompo';
// const FunctionalCompoLazy = React.lazy(() => import("./Component/functionalcomponent/functionalRouter"))




const MainRouter = () => {
    // const ClassCompoLazy = React.lazy(
    //     () => {
    //         return new Promise(resolve => {
    //           setTimeout(() => resolve(import("./Component/classcomponent/classRouter")), 3000);
    //         });


    const Examplerouter = React.lazy(()=>{
       return import ("./Component/example/examplerouter")
    })
    const ClassCompoLazy = React.lazy(()=>{
       return import ("./Component/classcomponent/classRouter")
    })
    const FunctionalCompoRouter = React.lazy(()=>{
       return import ("./Component/functionalcomponent/functionalRouter")
    })
    return (
        <>
            <Routes>

                <Route path="/" element={<Mainpage />}>
                    <Route path="contact" element={<ContactCompo />} />
                    <Route path="about" element={<AboutCompo />} />
                    <Route path="example/*" element={<Examplecompo />} >
                       
                        <Route path="classcompo/*" element={<Suspense fallback={<h1>loading classcompo........</h1>}> <ClassCompoLazy /></Suspense>} />

                        <Route path="examplecompo/*" element={ <Suspense fallback={<h1>loading examplecompo........</h1>}> <Examplerouter/>
                        </Suspense>}/>
                        
                        <Route path="functionalcompo/*" element={ <Suspense fallback={<h1>loading functionalcompo........</h1>}> <FunctionalCompoRouter/></Suspense>} />

                        {/* <Route path="classcompo/*" element={<IntroClassCompoRout />} />
                        <Route path="classcompo/*" element={<IntroClassCompoRout />} /> */}

                    </Route>

                </Route>

            </Routes>
        </>
    );
};

export default MainRouter;
