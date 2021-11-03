import React, { useState, useEffect, createRef} from 'react';
import { View, Dimensions, Image} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Button, TextInput,} from 'react-native-paper';
import styles from './scanStyle'
 	
import Loader from '../Components/Loader';
import Message from '../Components/Message';


const TicketScreen =  (props) => {

  const [scan, setScan] = useState(false);
  const [ScanResult, setScanResult] = useState(false);
  const [result, setResult] = useState('');
  const [num_ticket, setNumTicket] = useState('');
  const ticketInputRef = createRef();
  const desccription = 'QR code (abbreviated from Quick Response Code) is the trademark for a type of matrix barcode (or two-dimensional barcode) first designed in 1994 for the automotive industry in Japan. A barcode is a machine-readable optical label that contains information about the item to which it is attached. In practice, QR codes often contain data for a locator, identifier, or tracker that points to a website or application. A QR code uses four standardized encoding modes (numeric, alphanumeric, byte/binary, and kanji) to store data efficiently; extensions may also be used.'
  
  const SCREEN_HEIGHT = Dimensions.get("window").height;
  const SCREEN_WIDTH = Dimensions.get("window").width;
  const scanBarWidth = SCREEN_WIDTH * 0.46;


  const onSuccess = (e) => {
    const check = e.data.substring(0, 4);
    console.log('scanned data' + check);
    setResult(e);
    setScan(false);
    setScanResult(true);
    setNumTicket(result.data);
};

  const activeQR = () => {
    setScan(true);
  };

  const scanAgain = () => {
    setScan(true);
    setScanResult(false);
  };

  /*const [modalVisible, setModalVisible] = useState(false);
  const Toggle = () => {
    setModalVisible(!modalVisible)
  };
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const nameInputRef = createRef();
  const direInputRef = createRef();
  const phoneInputRef = createRef();
  const passwordInputRef = createRef();

  useEffect(() => {
    const unsubscribe = props.navigation.addListener('focus', () => {
      setUserName('');
      setUserEmail('');
      setUserDire('');
      setUserPhone('');
      setUserPassword('');
      readData();
      if(isRegistraionSuccess){
        setIsRegistraionSuccess(false);
     }
    });
    return unsubscribe;
  },[props.navigation])
  
  const readData = async () =>{
    setLoading(true);
  const userToken = await AsyncStorage.getItem('token');
  const userEmail = await AsyncStorage.getItem('user_id');
  var url = new URL("http://23.96.1.110/api/show_user");
  var params = {
    token: userToken,
    user_email: userEmail,
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
      console.log(responseJson);
        if (responseJson.success == false) {
          console.log(responseJson);
        } else {
          setUserName(responseJson.user_name);
          setUserEmail(responseJson.user_email);
          setUserPhone(responseJson.user_phone);
          setUserDire(responseJson.user_dire);
          setLoading(false);
        }
      }
    )
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
  }
  
  const handleSubmitButton = async () => {
    const userToken = await AsyncStorage.getItem('token');
    const userEmail = await AsyncStorage.getItem('user_id');
    setErrortext('');
    if (!user_name) {
      setErrortext('Por favor introduzca su nombre');
      return;
    }
    if (!user_email) {
      setErrortext('Por favor introduzca su email');
      return;
    }
    if (!user_phone) {
      setErrortext('Por favor introduzca su número de telefono');
      return;
    }
    if (!user_dire) {
      setErrortext('Por favor introduzca su dirección');
      return;
    }
    if (!user_password) {
      setErrortext('Por favor introduzca su contraseña');
      return;
    }
    //Show Loader
    setLoading(true);
    var dataToSend = {
      token: userToken,
      user_name: user_name,
      user_email: user_email,
      user_phone: user_phone,
      user_dire: user_dire,
      user_password: user_password,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://23.96.1.110/api/update_user', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        setLoading(false);
        console.log(responseJson);
        if( responseJson.hasOwnProperty('error') ) {
            setErrortext('Su contraseña debe tener almenos 6 caracteres');
        }else{
          if (responseJson.success == true) {
            setIsRegistraionSuccess(true);
            setModalVisible(true);
          } else {
            setErrortext(responseJson.message);
          }
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };*/
  return (
<View style={{flex: 1, backgroundColor: '#FFFFFF', height: "100%"}}>
        <View style={{alignItems: 'center'}}>
        <Image
            source={require('../../Image/logo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
          </View>
          <TextInput
              style={styles.inputStyle}
              onChangeText={(num_ticket) => setNumTicket(num_ticket)}
              autoCapitalize="sentences"
              returnKeyType="next"
              value={num_ticket}
              onSubmitEditing={() =>
                nameInputRef.current &&
                nameInputRef.current.focus()
              }
              blurOnSubmit={false}
              mode="outlined"
              label="Ticket"
            />
            {!scan && !ScanResult && 
            <Button icon="camera" mode="contained" onPress={activeQR} style={styles.buttonStyle}>
              Escanear QR            
            </Button>
            }

            {ScanResult &&
               
                    <View>
                        <Button icon="ticket" mode="contained" onPress={activeQR} style={styles.buttonStyle}>
                            Registrar Ticket            
                        </Button>
                        <Button icon="camera" mode="contained" onPress={scanAgain} style={styles.buttonStyle}>
                            Volver a escanear QR            
                        </Button>

                    </View>
            }


            {scan &&
                <QRCodeScanner
                    reactivate={true}
                    showMarker={true}
                    ref={(node) => { scanner = node }}
                    onRead={onSuccess}
                    style={{height: 50, width: 50, 
                      borderRadius: 30}}
                     cameraProps={{captureAudio: false}}
                     containerStyle={{height:10}}
                      cameraStyle={[{height:10}]}
                    bottomContent={
                        <View>
                            <Button icon="ticket" mode="contained" onPress={() => scanner.reactivate()} style={styles.buttonStyle}>
                                Registrar Ticket            
                            </Button>
                            <Button icon="camera-off" mode="contained" onPress={() => setScan(false)} style={styles.buttonStyle}>
                                Detener Escanner            
                            </Button>
                        </View>

                    }
                />
            }
        </View>
);
};
export default TicketScreen;
/*
const styles = StyleSheet.create({
  
  buttonStyle: {
    height: 40,
    alignItems: 'center',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#FFFFFF',
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'green',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
  container: {
    flexDirection: "row",
    height: 100,
    padding: 20,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
});*/