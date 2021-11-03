import { Dimensions, StyleSheet, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: Platform.select({ ios: 0, android: 1 }),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: '#a5b2c8',
  },
  tinyLogo: {
    height: 150,
    resizeMode: 'center',
    alignSelf: 'center'
  },
});
export default styles;
