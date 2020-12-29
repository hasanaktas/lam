import React, {FC} from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import styles from './Button.styles';
import {colors} from 'theme';
import {IButton} from 'types';

const Button: FC<IButton> = (props) => {
  const {
    children,
    style,
    fullWidth,
    small,
    mb,
    disabled,
    loading,
    invert,
    onPress,
  } = props;
  return (
    <TouchableOpacity
      style={[
        styles.button,
        fullWidth && styles.fullWidth,
        disabled && !loading && styles.disabled,
        mb && styles.mb,
        small && styles.smallButton,
        invert && styles.invertButton,
        style,
      ]}
      onPress={onPress}
      disabled={loading ? true : disabled}>
      {loading ? (
        <ActivityIndicator color={invert ? colors.background.paper : 'white'} />
      ) : (
        <Text
          style={[
            styles.text,
            small && styles.smallText,
            invert && styles.invertText,
          ]}>
          {children}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
