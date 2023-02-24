import { PropsWithChildren } from "react";
import { UserContextProvider } from "./user/user.context";

export const Contexts= ({children}: PropsWithChildren) => {
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    );
};