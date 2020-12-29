import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  input: {
    color: colors.text.secondary,
    fontFamily: 'Poppins',
    fontSize: 16,
    backgroundColor: colors.background.ground,
    alignSelf: 'stretch',
    borderRadius: 20,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[1],
    overflow: 'hidden',
  },
});

export default styles;
