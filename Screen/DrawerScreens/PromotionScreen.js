import React, {useState, createRef, useEffect, setState} from 'react';
import { View, ScrollView, Image } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { Divider, Title,   Paragraph, Card} from 'react-native-paper';
import Moment from 'moment';


import CustomSlider from './Carousel/CustomSlider';
import styles from './Carousel/styles';

import Loader from '../Components/Loader';


const PromotionScreen =  (props) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [promotion, setPromotion] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState('');
  const [rule, setRule] = useState('');

  useEffect(() => {
    Moment.locale('es');
    const unsubscribe = props.navigation.addListener('focus', () => {
      readData();
    });
    return unsubscribe;
  },[props.navigation])

  const readData = async () =>{
    setLoading(true);
   const userToken = await AsyncStorage.getItem('token');
   const userEmail = await AsyncStorage.getItem('user_id');
   var url = new URL("http://23.96.1.110/api/get_promotion");
   var params = {
     token: userToken,
   }
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
         if (responseJson.success == false) {
           console.log(responseJson);
         } else {
          setData(responseJson[0].prize);
          setPromotion(responseJson[0].promotion_name);
          setStartDate(responseJson[0].promotion_startdate);
          setEndDate(responseJson[0].promotion_enddate);
          setDescription(responseJson[0].promotion_description);
          setRule(responseJson[0].rule[0].rule_description);
           setLoading(false);
         }
       }
     )
     .catch((error) => {
       console.error(error);
      setLoading(false);
     });
   }

  return (
    <View >
      <ScrollView>
      <Loader loading={loading} />
      <Image
        style={styles.tinyLogo}
        source={require('../../Image/logo.png')}
      />
      <Title style={{textAlign: 'center',}}>{promotion}</Title>
      <Paragraph style={{textAlign: 'center',}}>{description}</Paragraph>
      <Paragraph style={{textAlign: 'center',}}>Vigencia: Del {Moment(startDate).format('D MMM Y')} al {Moment(endDate).format('D MMM Y')}</Paragraph>
      <Paragraph style={{textAlign: 'center',}}>{rule}</Paragraph>
      <Divider />
      <Title style={{textAlign: 'center',}}>Premios</Title>
      <Divider />
      <CustomSlider data={data} />
      </ScrollView>
    </View>
  );
}


export default PromotionScreen;