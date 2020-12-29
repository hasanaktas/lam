import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.background.paper,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing[3],
    height: 50,
    borderRadius: 20,
  },
  invertButton: {
    backgroundColor: colors.text.primary,
  },
  smallButton: {
    paddingHorizontal: spacing[2],
    height: 40,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  text: {
    color: colors.text.primary,
    fontFamily: 'Poppins',
    fontSize: 20,
  },
  invertText: {
    color: colors.background.paper,
  },
  smallText: {
    fontSize: 16,
  },
  disabled: {
    opacity: 0.5,
  },
  mb: {
    marginBottom: spacing[2],
  },
});

export default styles;
