import {createContext} from 'react';

type UserContextType = {
  user: any;
  setUser: (values: any) => void;
};

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => null,
});
