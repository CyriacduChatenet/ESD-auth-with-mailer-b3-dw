import { FC } from "react";
import { Routes, Route } from "react-router-dom";

import { HomePage } from "../../../app/pages/home";
import { SigninPage } from "../../../app/pages/auth/signin";
import { SignupPage } from "../../../app/pages/auth/signup";

export const PublicRouter: FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<HomePage/>}/>
            <Route  path={'/signin'} element={<SigninPage/>}/>
            <Route  path={'/signup'} element={<SignupPage/>}/>
        </Routes>
    )
};