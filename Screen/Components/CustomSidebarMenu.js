import React, {useState, createRef} from 'react';
import {View, Text, Alert, StyleSheet, Image} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';


import AsyncStorage from '@react-native-community/async-storage';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <Image style={stylesSidebar.tinyLogo}
        source={require('../../Image/logo.png')}
        />
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label={({color}) => 
            <Text >
              Cerrar Sesion
            </Text>
          }
          onPress={() => {
            props.navigation.toggleDrawer();
            Alert.alert(
              'Cerrar Sesion',
              '¿Esta Seguro que quiere cerrar sesion?',
              [
                {
                  text: 'Cancelar',
                  onPress: () => {
                    return null;
                  },
                },
                {
                  text: 'Confirmar',
                  onPress: () => {
                    handleLogout(props);
                  },
                },
              ],
              {cancelable: false},
            );
          }}
        />
      </DrawerContentScrollView>
    </View>
  );
};



const handleLogout = async (props) => {
  const userToken = await AsyncStorage.getItem('token');
  console.log(AsyncStorage.getItem('token'));
  var url = new URL("http://23.96.1.110/api/logout");
    params = {token: userToken,}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  console.log(url);
  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson);
        if (responseJson.success == true) {
          AsyncStorage.clear();
          props.navigation.replace('Auth');
        } else {
          AsyncStorage.clear();
          props.navigation.replace('Auth');
        }
      }
    )
    .catch((error) => {
      console.error(error);
    });
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  tinyLogo: {
    width: 150,
    height: 100,
  },
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    paddingTop: 40,
    color: '#307ecc',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});