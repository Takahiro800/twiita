import { createContext, ReactChild, ReactNode } from "react";

export const UserContext = createContext({});

export const UserProvider = (props:any) => {
	const {children} = props
	const loginStatus: boolean = false;

  return <UserContext.Provider value={ {loginStatus} }>{children}</UserContext.Provider>;
};
