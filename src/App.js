import React from "react";
import './styles/app.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./Components/utils/About";
import Posts from "./pages/Posts";
import Navbar from "./Components/UI/navbars/Navbar";
import Error from "./pages/Error";
import AppRouter from "./Components/AppRouter";



function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <AppRouter/>
        </BrowserRouter>
    )
}

export default App;
