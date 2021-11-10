import React from 'react';


import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import HomeScreen from './DrawerScreens/HomeScreen';
import PromotionScreen from './DrawerScreens/PromotionScreen';
import SettingsScreen from './DrawerScreens/SettingsScreen';
import TicketScreen from './DrawerScreens/TicketScreen';
import PrizeScreen from './DrawerScreens/PrizeScreen';
import TaxeScreen from './DrawerScreens/TaxeScreen';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const taxeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="TaxeScreen">
      <Stack.Screen
        name="TaxeScreen"
        component={TaxeScreen}
        options={{
          title: 'Facturacion',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const prizeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="TicketScreen">
      <Stack.Screen
        name="PrizeScreen"
        component={PrizeScreen}
        options={{
          title: 'Premios',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const ticketScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="TicketScreen">
      <Stack.Screen
        name="TicketScreen"
        component={TicketScreen}
        options={{
          title: 'Registrar Ticket',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Inicio',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const promotionScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="PromotionScreen">
      <Stack.Screen
        name="PromotionScreen"
        component={PromotionScreen}
        options={{
          title: 'Promociones',
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', 
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Cuenta', 
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 5, color: 'white'},
        labelStyle: {
          color: '#d8d8d8',
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Inicio'}}
        component={homeScreenStack}
      />
       <Drawer.Screen
        name="promocionScreenStack"
        options={{drawerLabel: 'Promociones'}}
        component={promotionScreenStack}
      />
      <Drawer.Screen
        name="prizeScreenStack"
        options={{drawerLabel: 'Premios'}}
        component={prizeScreenStack}
      />
      <Drawer.Screen
        name="ticketScreenStack"
        options={{drawerLabel: 'Tickets'}}
        component={ticketScreenStack}
      />
      <Drawer.Screen
        name="taxeScreenStack"
        options={{drawerLabel: 'Factuarcion'}}
        component={taxeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Cuenta'}}
        component={settingScreenStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;