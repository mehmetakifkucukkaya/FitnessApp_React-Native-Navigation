import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

function MemberResult({route}) {
  const {userInformation} = route.params;

  vke = Math.round(
    userInformation.Weight / (userInformation.Lenght * userInformation.Lenght),
  );

  function Result() {
    if (vke < 18.4) {
      return 'Zayıf';
    } else if (vke >= 18.5 && vke < 24.9) {
      return 'Normal';
    } else if (vke >= 25 && vke < 29.9) {
      return 'Fazla Kilolu';
    } else if (vke >= 30 && vke < 34.9) {
      return 'Şişman (Obez) 1. Sınıf';
    } else if (vke >= 35 && vke < 44.9) {
      return 'Şişman (Obez) 2. Sınıf';
    } else if (vke >= 45) {
      return 'Aşırı Şişman (Aşırı Obez) 2. Sınıf';
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kayıt Tamamlandı</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>
          Üye Ad Soyad: {userInformation.NameAndSurname}
        </Text>
        <Text style={styles.title}>Üye Yaşı: {userInformation.Age}</Text>
        <Text style={styles.title}>Üye E-Posta: {userInformation.Mail}</Text>
        <Text style={styles.title}>Üye Boy: {userInformation.Lenght}</Text>
        <Text style={styles.title}>Üye Kilo: {userInformation.Weight}</Text>
        <Text style={styles.title}>
          Vücut Kütle Endeksiniz :{' '}
          {Math.round(
            userInformation.Weight /
              (userInformation.Lenght * userInformation.Lenght),
          )}
        </Text>
        <Text style={styles.result}>VKE'e göre kilonuz: {Result()}</Text>
      </View>
    </View>
  );
}

export default MemberResult;

const styles = StyleSheet.create({
  infoContainer: {
    marginTop: 10,
    padding: 5,
    borderRadius: 5,
    borderWidth: 0.8,
    height: Dimensions.get('window').height / 3.3,
    width: Dimensions.get('window').width / 1,
    backgroundColor: '#D1D8DB',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0FB17C',
    textAlign: 'center',
    marginBottom: 25,
  },
  title: {
    fontsize: 20,
    fontWeight: '700',
    color: 'black',
    margin: 5,
  },
  result: {
    marginTop: 12,
    fontsize: 18,
    fontWeight: 'bold',
    color: '#0FB17C',
    textAlign: 'center',
  },
});
