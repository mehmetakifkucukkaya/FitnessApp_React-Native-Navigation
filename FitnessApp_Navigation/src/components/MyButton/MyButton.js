import React from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';

import styles from './MyButton.styles';

const Button = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
