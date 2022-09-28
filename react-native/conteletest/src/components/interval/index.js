import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import MyContext from '../../context/MyContext';
import styles from './styles';

export default function Interval({txt}) {
  const {setComunication} = useContext(MyContext);
  function handleInterval() {
    const number = Number(txt + '000');
    setComunication(number);
  }
  return (
    <View style={styles.cont}>
      <TouchableOpacity onPress={handleInterval} style={styles.btn}>
        <Text style={styles.txt}>{txt}s</Text>
      </TouchableOpacity>
    </View>
  );
}
