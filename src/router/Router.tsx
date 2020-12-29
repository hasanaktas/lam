import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomePage,
  SplashPage,
  StartPage,
  SignInPage,
  SignUpPage,
  SelectProfilePhotoPage,
} from '../pages';
import {useAuth} from 'hooks';
import {UserContext} from 'context';

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SelectProfilePhoto: undefined;
};

const Stack = createStackNavigator<StackParamList>();

const Router: React.FC = (): React.ReactElement => {
  const {initializing, user, setUser} = useAuth();

  const routes = () => {
    if (initializing) {
      return <Stack.Screen name="Splash" component={SplashPage} />;
    }
    if (user) {
      if (user.profilePhoto) {
        return <Stack.Screen name="Home" component={HomePage} />;
      } else {
        return (
          <Stack.Screen
            name="SelectProfilePhoto"
            component={SelectProfilePhotoPage}
          />
        );
      }
    }

    return (
      <>
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="SignIn" component={SignInPage} />
        <Stack.Screen name="SignUp" component={SignUpPage} />
      </>
    );
  };

  return (
    <UserContext.Provider value={{user, setUser}}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <NavigationContainer>
        <Stack.Navigator headerMode="none">{routes()}</Stack.Navigator>
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default Router;
