import {StyleSheet} from 'react-native';
import {colors, spacing} from 'theme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.paper,
    padding: spacing[2],
    borderRadius: 20,
    marginBottom: spacing[2],
  },
  sender: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing[1],
  },
  profilePhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: spacing[1],
    backgroundColor: colors.text.primary,
  },
  emailText: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: colors.text.primary,
    opacity: 0.7,
  },
  messageText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: colors.text.primary,
  },
  buttons: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    marginTop: spacing[1],
  },
});

export default styles;
