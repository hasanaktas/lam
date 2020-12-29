import {StyleSheet, Dimensions} from 'react-native';
import {colors, spacing} from 'theme';

const {width, height} = Dimensions.get('window');
const imageSize = width - 40;
const styles = StyleSheet.create({
  root: {
    flex: 1,

    justifyContent: 'center',
    backgroundColor: colors.background.default,
  },
  title: {
    color: colors.text.secondary,
    fontFamily: 'Poppins',
    fontSize: 24,
    marginBottom: spacing[2],
  },
  photoButton: {
    width: imageSize,
    height: imageSize,
    backgroundColor: colors.background.ground,
    borderRadius: 20,
    marginBottom: spacing[4],
    overflow: 'hidden',
  },
  photo: {
    width: imageSize,
    height: imageSize,
  },
});

export default styles;
