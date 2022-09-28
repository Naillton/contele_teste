import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

export default function Empty() {
  return (
    <View>
      <Text style={styles.text}>OOOHH Nao, voce nao tem pontos salvos</Text>
    </View>
  );
}
