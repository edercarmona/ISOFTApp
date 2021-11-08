import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image
} from 'react-native';
import { isTablet, getDeviceType } from 'react-native-device-info';

import AsyncStorage from '@react-native-community/async-storage';

const SplashScreen = ({navigation}) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.setItem('istablet', isTablet().toString());
      setAnimating(false);
      AsyncStorage.getItem('token').then((value) =>
        navigation.replace(
          value === null ? 'Auth' : 'DrawerNavigationRoutes'
        ),
      );
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../Image/logo.png')}
        style={{ width: '100%', resizeMode: 'contain', margin: 0}}
      />
      <ActivityIndicator
        animating={animating}
        color="307ecc"
        size="large"
        style={styles.activityIndicator}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    
  },
  activityIndicator: {
    alignItems: 'center',
    height: 80,
  },
});