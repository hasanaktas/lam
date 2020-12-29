import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  header: {
    height: 80 + spacing.statusbarHeight,
    paddingTop: spacing.statusbarHeight,
    paddingHorizontal: spacing[2],
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 40,
  },
  logo: {
    flex: 1,
    fontSize: 40,
    fontFamily: 'Poppins',
    textAlign: 'center',
    color: colors.text.secondary,
  },
  content: {
    flex: 1,
    paddingHorizontal: spacing[2],
    paddingTop: spacing[2],
  },
  toast: {
    backgroundColor: colors.background.paper,
    height: 80 + spacing.statusbarHeight,
    paddingTop: spacing.statusbarHeight,
    paddingHorizontal: spacing[2],
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  toastText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: colors.text.primary,
  },
});

export default styles;
