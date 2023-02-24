import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { DashboardPage } from "../../../app/pages/user/dashboard";
import { PrivateRoute } from "./privateRoute";

export const PrivateRouter: FC = () => {
    return (
        <Routes>
            <Route element={<PrivateRoute/>}>
            <Route path={'/dashboard'} element={<DashboardPage/>} />
            </Route>
        </Routes>
    )
};