import axios from 'axios';
import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import type { BackendUser, User, UserInput } from '../../types/UserType';

type UserContextValue = {
  user: User;
  logoutHandler: () => void;
  submitHandler: (input: UserInput) => void;
};

const UserContext = createContext<UserContextValue | undefined>(undefined);

export default function UserContextProvider({ children }: { children: JSX.Element }): JSX.Element {
  const [user, setUser] = useState<User>({ status: 'fetching' });

  useEffect(() => {
    axios('/auth/check')
      .then((res: { data: BackendUser }) => setUser({ ...res.data, status: 'logged' }))
      .catch(console.log);
  }, []);

  const logoutHandler = useCallback((): void => {
    axios('/auth/logout')
      .then(() => setUser({ status: 'empty' }))
      .catch(console.log);
  }, []);

  const submitHandler = useCallback((input: UserInput): void => {
    axios
      .post('/auth', input)
      .then((res: { data: BackendUser }) => setUser({ ...res.data, status: 'logged' }))
      .catch(console.log);
  }, []);

  const contextValue = useMemo(() => ({ user, logoutHandler, submitHandler }), [user]);

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}

export { UserContext };
