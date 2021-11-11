import React from 'react';
import {StyleSheet, View, Modal, Text, Pressable } from 'react-native';
import { Button, TextInput } from 'react-native-paper';


const Message = (props) => {
  const {modalVisible, ...attributes} = props;
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisible}
    onRequestClose={() => {
      Alert.alert("Modal has been closed.");
      props.modalStatus();
    }}>
     <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>EL modulo de Facturacion aun no eta disponible</Text>
            <Button icon="check" mode="contained" onPress={() => props.modalStatus()} style={styles.buttonStyle}>
            Aceptar            
            </Button>
          </View>
        </View>
    </Modal>
  );
};

export default Message;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040',
  },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: "100%"
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2
    },
    buttonStyle: {
      height: 40,
      alignItems: 'center',
      borderRadius: 10,
      marginLeft: 35,
      marginRight: 35,
      marginTop: 20,
    },
    buttonOpen: {
      backgroundColor: "black",
    },
    buttonClose: {
      backgroundColor: "black",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 18,
      textAlign: "center"
    }
});