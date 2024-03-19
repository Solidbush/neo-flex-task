import React from 'react';
import {observer} from "mobx-react";
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import MainPage from "../pages/MainPage";

const AppRouter = observer(() => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} element={<Component />}/>
            )}
            <Route path="*" element={<MainPage/>}/>
        </Routes>
    );
});

export default AppRouter;