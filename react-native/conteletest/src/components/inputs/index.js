import React, {useContext} from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import MyContext from '../../context/MyContext';
import {styles} from './styles';

export default function Inputs() {
  const {email, password, setEmail, setPassword} = useContext(MyContext);
  return (
    <SafeAreaView>
      <TextInput
        style={styles.camps}
        placeholder="Digite seu E-mail"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
        minLength={10}
        maxLength={35}
      />
      <TextInput
        style={styles.camps}
        placeholder="Digite sua senha"
        keyboardType="default"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
        minLength={8}
        maxLength={16}
      />
    </SafeAreaView>
  );
}
