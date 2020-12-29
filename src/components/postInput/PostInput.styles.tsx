import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.background.paper,
    opacity: 0.9,
  },
  card: {
    backgroundColor: colors.background.default,

    paddingTop: spacing.statusbarHeight,
    paddingBottom: spacing[2],
    paddingHorizontal: spacing[2],
    justifyContent: 'center',
    alignItems: 'center',
  },
  profilePhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginTop: spacing[1],
    marginBottom: spacing[1],
  },
  buttons: {
    flexDirection: 'row',
    marginTop: spacing[1],
    alignSelf: 'flex-end',
  },
  cancelButton: {
    marginRight: spacing[1],
    backgroundColor: '#F8B376',
  },
  input: {},
});

export default styles;
