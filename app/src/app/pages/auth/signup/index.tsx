import { FC } from "react";

import { AuthInputs } from "../../../components/auth/inputs";

export const SignupPage: FC = () => {
    return (
        <main>
            <h1>Signup</h1>
            <AuthInputs label="signup" confirmPassword={true}/>
        </main>
    );
};