import React from 'react';
import {TextInput, View, Text} from 'react-native';

import styles from './MyTextInput.styles';

const MyTextInput = ({title, onChangeText, placeholder,keyBoardType}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyBoardType}

          style={styles.textInput}></TextInput>
      </View>
    </View>
  );
};

export default MyTextInput;
