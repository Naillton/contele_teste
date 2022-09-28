import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function Button({func, txt, disabled}) {
  return (
    <SafeAreaView>
      <TouchableOpacity disabled={disabled} onPress={func} style={styles.btn}>
        <Text>{txt}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
