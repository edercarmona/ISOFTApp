import React from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet, StatusBar} from 'react-native';

import { Avatar, Card, Paragraph } from 'react-native-paper';

const LeftContent = props => <Avatar.Icon {...props} icon="wallet-giftcard" />


const HomeScreen = () => {
  
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
            <Card mode="elevated">
            <Card.Title title="Card Title"  left={LeftContent} />
            <Card.Cover source={{ uri: 'https://gaseolo.blob.core.windows.net/premios/promocion1.png' }} />
              <Card.Content>
                <Paragraph>Card content</Paragraph>
              </Card.Content>
             
            </Card>
            
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'grey',
          }}>
          Servi Gaseolo S. de RL. de CV
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          www.servigaseolo.com.mx
        </Text>
      </View>
    </SafeAreaView>
  );
};


export default HomeScreen;