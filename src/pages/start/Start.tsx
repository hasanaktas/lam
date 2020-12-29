import React from 'react';
import {Text, View} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Button, Layout} from 'components';
import styles from './Start.styles';
import {StackParamList} from 'types';

type StartScreenNavigationProp = StackNavigationProp<StackParamList, 'Start'>;

interface Props {
  navigation: StartScreenNavigationProp;
}

const StartPage: React.FC<Props> = (props) => {
  const {navigation} = props;

  const navigateSignIn = () => {
    navigation.navigate('SignIn');
  };
  const navigateSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Layout contentStyle={styles.root}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>leave a message</Text>
        <Text style={styles.text}>for the future</Text>
      </View>
      <Button mb fullWidth onPress={navigateSignIn}>
        Sign In
      </Button>
      <Button fullWidth onPress={navigateSignUp}>
        Sign Up
      </Button>
    </Layout>
  );
};

export default StartPage;
