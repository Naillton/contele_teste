import React from 'react';
import {View, Switch, Text} from 'react-native';
import styles from './styles';

export default function Toggle({habilit, func}) {
  return (
    <View>
      <Text style={styles.text}>
        Localizar:{' '}
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={{habilit} ? '#f5dd4b' : '#f4f3f4'}
          onValueChange={func}
          value={habilit}
        />
      </Text>
    </View>
  );
}
