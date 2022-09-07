import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "./utils/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";
import {routes} from "../Router";

const AppRouter = () => {
    return (
        <Routes>
            {routes.map(route =>
                <Route exact={route.exact}
                       path={route.path}
                       element={route.element} />
            )}
        </Routes>
    )
};

export default AppRouter;