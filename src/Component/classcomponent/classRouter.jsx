// import React from 'react';
// import { Route, Routes } from 'react-router-dom';

// import Constructor from './constructor';
// import IntroClassCompo from './introClassCompo';

// const ClassRouter = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path="/" element={<IntroClassCompo />} >
//                     {/* <Route index element={<IntroClassCompo />} /> */}
//                     <Route path="constructor" element={<Constructor />} ></Route>
//                 </Route >
//                 {/* <Route index element={<IntroClassCompo />} >
//                 </Route> */}
//                 {/* <Route path="/" element={<IntroFunctionalCompo />} ></Route> */}
//             </Routes>
//         </>
//     );
// };

// export default ClassRouter;
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'



import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import IntroClassCompo from "./01introClassCompo.jsx"
import Constructor from './02constructor.jsx';
import State from './03state.jsx';
import Hoc from './HOC/hoc.jsx';
import WithoutHoc1 from './HOC/withoutHoc1.jsx';
import WithoutHoc2 from './HOC/withoutHoc2.jsx';
import WithHoc from './HOC/withHoc.jsx';
import Props from './04props.jsx';
import Lifecycle from './05lifecycle.jsx';
import Conditionalcompo from './06conditionalcompo.jsx';
import Loggin from './06.1loggin.jsx';
import ListKey from './07list&key.jsx';
import Lifting from './08lifting.jsx';

class IntroClassCompoRout extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path='/' element={<IntroClassCompo />}>

                        <Route path="constructor" element={<Constructor />} ></Route>

                        <Route path="state" element={<State/>} ></Route>

                        <Route path="lifecycle" element={<Lifecycle/>} ></Route>

                        <Route path="conditionalcompo" element={<Conditionalcompo/>} ></Route>

                        <Route path="loggin" element={<Loggin/>} ></Route>

                        {/* <Route path="listkey" element={<ListKey/>} ></Route> */}

                        <Route path="lifting" element={<Lifting/>} ></Route>

                        <Route path="hoc" element={<Hoc/>} >

                          <Route path="withoutHoc1" element={<WithoutHoc1/>} ></Route>
                          <Route path="withoutHoc2" element={<WithoutHoc2/>} ></Route>
                          <Route path="Withhoc" element={<WithHoc/>} ></Route>

                        </Route>

                    </Route>
                        <Route path="props" element={<Props/>} ></Route>
                </Routes>
            </>
        );
    }
}

export default IntroClassCompoRout;