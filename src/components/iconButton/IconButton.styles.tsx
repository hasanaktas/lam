import {StyleSheet} from 'react-native';
import {colors} from 'theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.background.paper,
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default styles;
