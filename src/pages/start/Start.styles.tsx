import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background.default,
  },
  text: {
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.text.secondary,
    fontSize: 30,
  },
  textContainer: {
    marginBottom: spacing[5],
  },
});

export default styles;
