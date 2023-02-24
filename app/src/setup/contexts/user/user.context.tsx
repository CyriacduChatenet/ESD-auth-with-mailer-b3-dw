import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from 'react';

type Context = {
	state: any;
	setState: Dispatch<SetStateAction<any>>;
};

const userContext = createContext<Context>({
	state: {},
	setState: () => {},
});

export const UserContextProvider = ({ children }: PropsWithChildren) => {
	const [state, setState] = useState({});
	
	return <userContext.Provider value={{ setState, state}}>{children}</userContext.Provider>;
};

const useUser = () => useContext<Context>(userContext);

export default useUser;