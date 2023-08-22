import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);
    // как отрабатывает излоадинг с изаусом при перезагрузке страницы, когда открыт пост (в том случае, если есть редирект)?
    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={route.element}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
            :
        <Routes>
            {publicRoutes.map(route =>
                    <Route
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
        </Routes>
    );
};

export default AppRouter;