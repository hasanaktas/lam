import {StyleProp, ViewStyle} from 'react-native';

export interface IPost {
  id?: string;
  post: string;
  timestamp?: any;
  sender: {
    email: string;
    profilePhoto: string;
    uid: string;
  };
}

export interface IToast {
  title: string;
  open: boolean;
}

export interface IProfile {
  uid?: string;
  email: string;
  profilePhoto: string;
}

export type StackParamList = {
  Splash: undefined;
  Home: undefined;
  Start: undefined;
  SignIn: undefined;
  SignUp: undefined;
  SelectProfilePhoto: undefined;
};

export interface IButton {
  children: string;
  fullWidth?: boolean;
  loading?: boolean;
  mb?: boolean;
  disabled?: boolean;
  invert?: boolean;
  small?: boolean;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}
