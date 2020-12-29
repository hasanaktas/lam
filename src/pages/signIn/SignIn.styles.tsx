import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,

    backgroundColor: colors.background.default,
  },
  input: {
    marginBottom: spacing[1],
  },
});

export default styles;
