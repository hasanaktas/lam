import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './Splash.styles';

const HomePage: FC = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.logo}>lam</Text>
    </View>
  );
};

export default HomePage;
