import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../Router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)
    if (isLoading) {
        return <Loader/>
    }
    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route exact={route.exact}
                           path={route.path}
                           element={route.element}
                           key={route.path}
                    />
                )}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route exact={route.exact}
                           path={route.path}
                           element={route.element}
                           key={route.path}
                    />
                )}
            </Routes>

    )
};

export default AppRouter;