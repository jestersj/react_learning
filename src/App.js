import React from "react";
import './styles/app.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./Components/utils/About";
import Posts from "./pages/Posts";



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/about' element={<About/>}/>
                <Route path='/posts' element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;
