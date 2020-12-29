import React, {forwardRef} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import {colors} from 'theme';
import styles from './Input.styles';

const Input = forwardRef<TextInput, TextInputProps>(
  ({style, ...otherProps}, ref) => (
    <TextInput
      underlineColorAndroid="transparent"
      importantForAutofill="no"
      autoCorrect={false}
      autoCapitalize="none"
      contextMenuHidden={true}
      placeholderTextColor={colors.text.secondary}
      style={[styles.input, style]}
      {...otherProps}
      ref={ref}
    />
  ),
);

export default Input;
