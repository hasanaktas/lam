import {useContext} from 'react';
import {UserContext} from 'context';

const useSession = () => {
  const {user, setUser} = useContext(UserContext);
  return [user, setUser];
};

export default useSession;
