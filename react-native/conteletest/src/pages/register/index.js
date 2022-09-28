import React, {useContext} from 'react';
import {SafeAreaView, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import Inputs from '../../components/inputs';
import Button from '../../components/button';
import ChangeText from '../../components/changeText';
import auth from '@react-native-firebase/auth';
import MyContext from '../../context/MyContext';

export default function Register() {
  const {email, password, disabled} = useContext(MyContext);
  const navigation = useNavigation();

  function handleLogin() {
    navigation.navigate('Login');
  }

  function handleCreateUser() {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(console.log('user created'))
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
        console.error(error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Inputs />
        <Button disabled={disabled} func={handleCreateUser} txt={'Cadastrar'} />
        <ChangeText func={handleLogin} txt={'Ja tem Cadastro ?'} />
      </View>
    </SafeAreaView>
  );
}
