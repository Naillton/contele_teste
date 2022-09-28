import React, {useContext} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import Empty from '../../components/empty';
import MyContext from '../../context/MyContext';
import {styles} from './styles';

export default function Status() {
  const {stored, clearStorage} = useContext(MyContext);
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.pointList}
        showsVerticalScrollIndicator={false}
        data={stored}
        keyExtractor={point => point.id}
        ListEmptyComponent={<Empty />}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => clearStorage(item.id)}
            style={styles.point}>
            <Text style={styles.text}>Pacote ID: {item.id}</Text>
            <Text style={styles.text}>{item.time.substring(11)}</Text>
            <Text style={styles.text}>Pendente para Sincronizar</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
