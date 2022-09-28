import React, {useContext} from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {styles} from './styles';

import MyContext from '../../context/MyContext';
import Toggle from '../../components/switch';
import Button from '../../components/button';
import Interval from '../../components/interval';
import {randomString} from '../../utils/randomString';

export default function Home() {
  const {
    currentLatitude,
    currentLongitude,
    toggleSwitch,
    user,
    isEnabled,
    year,
    comunication,
    setPoints,
    points,
    setValue,
  } = useContext(MyContext);
  const navigation = useNavigation();

  function handleStatus() {
    navigation.navigate('Status');
  }

  function handleLogOut() {
    auth().signOut().then(console.log('User signed out!'));
  }

  const setPointsStorage = () => {
    if (points.length === 0) {
      points.push({
        id: randomString(),
        longitude: currentLongitude,
        latitude: currentLatitude,
        speed: comunication,
        time: year,
      });
    } else {
      setPoints(prevState => [
        ...prevState,
        {
          id: randomString(),
          longitude: currentLongitude,
          latitude: currentLatitude,
          speed: comunication,
          time: year,
        },
      ]);
      setValue(points);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>Ola: {user.email} </Text>
        <TouchableOpacity style={styles.btnsair} onPress={handleLogOut}>
          <Text>Sair</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.location}>
        <Text style={styles.text}>Latitude: {currentLatitude}</Text>
        <Text style={styles.text}>Longitude: {currentLongitude}</Text>
        <Text style={styles.text}>Year: {year}</Text>
        <Text style={styles.text}>Intervalo de comunicacao</Text>
        <View style={styles.interval}>
          <Interval txt={'10'} />
          <Interval txt={'5'} />
          <Interval txt={'3'} />
          <Interval txt={'1'} />
        </View>
        {isEnabled === false ? (
          <Text style={styles.local}>Localizacao inativa</Text>
        ) : (
          <Text style={styles.local}>Localizacao ativada</Text>
        )}
        <Toggle func={toggleSwitch} habilit={isEnabled} />
        <View style={styles.contBtn}>
          <Button func={handleStatus} txt={'Status'} />
          <Button func={setPointsStorage} txt={'AddStorage'} />
        </View>
      </View>
    </SafeAreaView>
  );
}
