import { FC } from "react";
import { AuthInputs } from "../../../components/auth/inputs";

export const SigninPage: FC = () => {
    return (
        <main>
            <h1>Signin</h1>
            <AuthInputs label="signin" confirmPassword={false}/>
        </main>
    );
};