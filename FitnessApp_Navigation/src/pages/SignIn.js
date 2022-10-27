import React, {useState} from 'react';
import {ScrollView, View} from 'react-native';

import MyTextInput from '../components/MyTextInput';
import Button from '../components/MyButton';

function SignIn({navigation}) {
  const [NameAndSurname, setNameAndSurname] = useState(null);
  const [Age, setAge] = useState(null);
  const [Mail, setMail] = useState(null);
  const [Lenght, setLenght] = useState(null);
  const [Weight, setWeight] = useState(null);

  function goToResultPage() {
    navigation.navigate('Member Result Page', {userInformation});
  }

  const userInformation = {
    NameAndSurname,
    Age,
    Mail,
    Lenght,
    Weight,
  };

  function onPress() {
    if (!NameAndSurname || !Age || !Mail || !Lenght || !Weight) {
      alert('Formdaki tüm alanları doldurmanız gerek!..');
      return;
    } else {
      goToResultPage();
    }
  }

  return (
    <View>
      <MyTextInput
        placeholder="Üyenin Adını ve Soyadını Giriniz"
        title="Üye Adı ve Soyadı"
        onChangeText={setNameAndSurname}
      />

      <MyTextInput
        placeholder="Üyenin Yaşını Giriniz"
        title="Üye Yaşı"
        onChangeText={setAge}
      />
      <MyTextInput
        placeholder="Üyenin E-postasını Giriniz"
        title="Üye E-posta"
        onChangeText={setMail}
        keyboardType="email-address"
      />
      <MyTextInput
        placeholder="Üyenin Boyunu Giriniz (Örneğin 1.80 )"
        title="Üye Boyu"
        onChangeText={setLenght}
        keyboardType="numeric"
      />
      <MyTextInput
        placeholder="Üyenin Kilosunu Giriniz"
        title="Üye Kilosu"
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <Button text="Kaydı Tamamla" onPress={onPress}></Button>
    </View>
  );
}

export default SignIn;
