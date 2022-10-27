import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

import MyButton from '../components/MyButton';

function Welcome({navigation}) {
  function goToSıgnInPage() {
    navigation.navigate('Sign In Page');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fitness Salonu </Text>
      <MyButton text="Yeni Üye Kaydı Oluştur" onPress={goToSıgnInPage} />
    </SafeAreaView>
  );
}

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
