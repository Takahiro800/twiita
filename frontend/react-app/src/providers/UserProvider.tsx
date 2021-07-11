import { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props: any) => {
  const { children } = props;
  const [loginStatus, setLoginStatus] = useState(false);

  return <UserContext.Provider value={{ loginStatus, setLoginStatus }}>{children}</UserContext.Provider>;
};
