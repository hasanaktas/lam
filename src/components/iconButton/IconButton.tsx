import * as React from 'react';
import {TouchableOpacity, Image} from 'react-native';
import styles from './IconButton.styles';

interface IIcons {
  [key: string]: any;
}

const icons: IIcons = {
  globe: require('assets/icons/globe.png'),
  logout: require('assets/icons/logout.png'),
  plus: require('assets/icons/plus.png'),
  user: require('assets/icons/user.png'),
};

interface Props {
  children: string;
  onPress?: () => void;
}

const IconButton: React.FC<Props> = (props) => {
  const {children, onPress} = props;
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image source={icons[children]} style={styles.icon} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  children: 'globe',
};

export default IconButton;
