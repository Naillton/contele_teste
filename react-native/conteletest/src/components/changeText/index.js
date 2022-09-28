import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';

export default function ChangeText({func, txt}) {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={func}>
        <Text style={styles.text}>{txt}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
