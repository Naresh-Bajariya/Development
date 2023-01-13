import { Route, Routes } from "react-router-dom"
import Exampleintro from "./exampleintro"
import Statefun from "./statefun"

const Examplerouter = ( )=>{
    return(
        <>
        <Routes>
            <Route path = "/" element={<Exampleintro/>}>
                <Route path="statefun" element ={<Statefun/>}></Route>
            </Route>
        </Routes>
        </>
    )
}
export default Examplerouter