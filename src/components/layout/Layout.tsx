import React, {FC, useEffect, useRef} from 'react';
import {View, Text, StyleProp, ViewStyle, Animated} from 'react-native';
import IconButton from '../iconButton';
import styles from './Layout.styles';
import {IToast} from 'types';

interface Props {
  children: React.ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
  leftIcon?: {
    visible: boolean;
    icon: string;
    onPress: () => void;
  };
  rightIcon?: {
    visible: boolean;
    icon: string;
    onPress: () => void;
  };
  toast?: IToast;
}

const Layout: FC<Props> = (props) => {
  const {children, toast, leftIcon, rightIcon, contentStyle} = props;
  const toastAnimatedValue = useRef<Animated.Value>(new Animated.Value(0))
    .current;

  useEffect(() => {
    if (toast?.title !== '') {
      Animated.spring(toastAnimatedValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start(() =>
        Animated.spring(toastAnimatedValue, {
          delay: 1500,
          toValue: 0,
          useNativeDriver: true,
        }).start(),
      );
    }
  }, [toast]);

  const translateY = toastAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-200, 0],
  });

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <View style={styles.icons}>
          {leftIcon?.visible && (
            <IconButton onPress={leftIcon.onPress}>{leftIcon?.icon}</IconButton>
          )}
        </View>
        <Text style={styles.logo}>lam</Text>
        <View style={styles.icons}>
          {rightIcon?.visible && (
            <IconButton onPress={rightIcon.onPress}>
              {rightIcon?.icon}
            </IconButton>
          )}
        </View>
      </View>
      <View style={[styles.content, contentStyle]}>{children}</View>
      <Animated.View style={[styles.toast, {transform: [{translateY}]}]}>
        <Text style={styles.toastText}>{toast?.title}</Text>
      </Animated.View>
    </View>
  );
};

Layout.defaultProps = {
  toast: {
    title: '',
    open: false,
  },
  leftIcon: {
    visible: false,
    icon: 'user',
    onPress: () => null,
  },
  rightIcon: {
    visible: false,
    icon: 'plus',
    onPress: () => null,
  },
};

export default React.memo(Layout);
