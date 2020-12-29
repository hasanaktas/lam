import React, {useEffect, useState} from 'react';
import firebase from 'firebase/app';
import {getProfile} from 'actions';

const useAuth = () => {
  const [initializing, setInitializing] = useState<boolean>(true);
  const [user, setUser] = React.useState<any>(null);

  function onChange(user: any) {
    if (user) {
      getProfile(user.uid).then((doc) => {
        if (!doc.exists) {
          setUser({uid: user.uid, email: user.email});
          setInitializing(false);
        } else {
          setUser({...doc.data(), uid: user.uid});
          setInitializing(false);
        }
      });
    } else {
      setInitializing(false);
      setUser(null);
    }
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    return () => unsubscribe();
  }, []);

  return {initializing, user, setUser};
};

export default useAuth;
