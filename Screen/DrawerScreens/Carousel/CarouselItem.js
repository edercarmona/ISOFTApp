import React from 'react';
import { ParallaxImage } from 'react-native-snap-carousel';
import { View, Text, Pressable, SafeAreaView } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

import styles from './styles';

function CarouselItem({ item, index }, parallaxProps) {
  return (
      <Card>
        <Card.Title title={item.prize_name} subtitle={item.prize_points+" puntos"} />
        <Card.Cover source={{ uri: item.prize_image}} />
        <Card.Content>
          <Paragraph>{item.prize_description}</Paragraph>
        </Card.Content>
      </Card>
  );
}

export default CarouselItem;