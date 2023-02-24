import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute: FC = () => {
    let auth = { token: false};

    return (
        <>
        {auth.token ? <Outlet/> :<Navigate to={'/signin'}/>}
        </>
    );
};