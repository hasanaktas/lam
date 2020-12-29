import React, {FC, useRef, useState} from 'react';
import {TextInput} from 'react-native';
import {Button, Layout, Input} from 'components';
import {IToast} from 'types';
import styles from './SignIn.styles';
import {signIn} from 'actions';

const SignInPage: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [toast, setToast] = useState<IToast>({
    title: '',
    open: false,
  });
  const [loading, setLoading] = useState<boolean>(false);
  const passwordRef = useRef<TextInput>(null!);

  const signInAuth = () => {
    setLoading(true);
    signIn(email, password)
      .then(() => {
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setToast({title: e.message, open: true});
      });
  };

  return (
    <Layout contentStyle={styles.root} toast={toast}>
      <Input
        autoFocus
        returnKeyType="next"
        placeholder="email"
        onSubmitEditing={() => passwordRef.current.focus()}
        keyboardType="email-address"
        value={email}
        onChangeText={(t) => setEmail(t)}
        style={styles.input}
      />
      <Input
        ref={passwordRef}
        placeholder="password"
        style={styles.input}
        value={password}
        secureTextEntry
        onChangeText={(t) => setPassword(t)}
      />
      <Button loading={loading} onPress={signInAuth} fullWidth>
        Login
      </Button>
    </Layout>
  );
};

export default SignInPage;
