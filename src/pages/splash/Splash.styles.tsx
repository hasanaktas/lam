import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background.paper,
  },
  logo: {
    fontFamily: 'Poppins',
    fontSize: 70,
    color: colors.text.primary,
  },
});

export default styles;
