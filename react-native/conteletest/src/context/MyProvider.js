import React, {useState, useEffect} from 'react';
import {PermissionsAndroid, Alert} from 'react-native';
import PropTypes from 'prop-types';
import MyContext from './MyContext';
import Geolocation from '@react-native-community/geolocation';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostPoints} from '../services/index';

export default function MyProvider({children}) {
  const [disabled, setDisabled] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();
  const [currentLatitude, setLatitude] = useState(0);
  const [currentLongitude, setLongitude] = useState(0);
  const [year, setYear] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [watchID, setWatchID] = useState(0);
  const [comunication, setComunication] = useState(10000);
  const [points, setPoints] = useState([]);
  const [stored, setStoredValue] = useState([]);
  const [sync, setSync] = useState(false);

  const setValue = async value => {
    try {
      await AsyncStorage.setItem('points', JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  const clearStorage = async itens => {
    try {
      let point = await AsyncStorage.getItem('points');
      let pointArray = JSON.parse(point);
      const onePoint = pointArray.filter(op => {
        return op.id === itens;
      });
      let obj;
      onePoint.forEach(element => {
        obj = element;
      });
      PostPoints(`/points/${obj.id}`, obj);
      const newPoints = pointArray.filter(p => {
        return p.id !== itens;
      });
      await AsyncStorage.setItem('points', JSON.stringify(newPoints));
      setStoredValue(newPoints);
    } catch (err) {
      console.log(err);
    }
  };

  const getStored = async initialValue => {
    try {
      const item = await AsyncStorage.getItem('points');
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getStored(points);
  }, [points]);

  const onAuthStateChanged = userParams => {
    setUser(userParams);
  };

  const toggleSwitch = () => {
    if (isEnabled === false) {
      location();
      setIsEnabled(true);
    } else {
      clearLocation();
      setIsEnabled(false);
    }
  };

  useEffect(() => {
    const subs = auth().onAuthStateChanged(onAuthStateChanged);
    return subs;
  }, []);

  const location = () => {
    const locationPermision = async () => {
      const request = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Permissao para acessar localizacao',
          message: 'Ola, preciso da localizacao habilita por favor!',
          buttonNeutral: 'Agora nao',
          buttonNegative: 'Cancelar',
          buttonPositive: 'Ativar',
        },
      );
      if (request === PermissionsAndroid.RESULTS.GRANTED) {
        getLocation();
      } else {
        Alert('Permissao negada');
      }
    };
    locationPermision();
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      error => console.log(error.message),
      {enableHighAccuracy: true, timeout: comunication, maximumAge: 1000},
    );
    const watch = Geolocation.watchPosition(position => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setLatitude(latitude);
      setLongitude(longitude);
    });
    setWatchID(watch);
    const data = new Date();
    const dateYear = data.toLocaleString();
    setYear(dateYear);
  };

  useEffect(() => {
    const verify = () => {
      const reg = new RegExp(/^\w+(\[\+\.-\]?\w)*@\w+(\[\.-\]?\w+)*\.[a-z]+$/i);
      const emailTest = reg.test(email);
      if (password.length >= 8 && emailTest) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    return verify();
  }, [email, password, disabled]);

  const clearLocation = () => {
    Geolocation.clearWatch(watchID);
  };

  return (
    <MyContext.Provider
      value={{
        email,
        password,
        disabled,
        currentLatitude,
        currentLongitude,
        toggleSwitch,
        isEnabled,
        year,
        setEmail,
        setPassword,
        setComunication,
        user,
        setPoints,
        points,
        setValue,
        comunication,
        stored,
        sync,
        setSync,
        clearStorage,
      }}>
      {children}
    </MyContext.Provider>
  );
}

MyProvider.prototypes = {
  children: PropTypes.node,
}.isRequired;
