import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import Inputs from '../../components/inputs';
import Button from '../../components/button';
import ChangeText from '../../components/changeText';
import MyContext from '../../context/MyContext';
import auth from '@react-native-firebase/auth';

export default function Login() {
  const {email, password, disabled} = useContext(MyContext);
  const navigation = useNavigation();

  function handleRegister() {
    navigation.navigate('Register');
  }

  function handleLogin() {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(console.log('loged user'))
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Inputs />
        <Button disabled={disabled} func={handleLogin} txt={'Login'} />
        <ChangeText func={handleRegister} txt={'Cadastre-se'} />
      </View>
    </SafeAreaView>
  );
}
