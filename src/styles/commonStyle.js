import { View, Text, StyleSheet } from 'react-native';

//react native gak bisa naro class
//internal css in jsx

//global css/commonStyle
const commonStyle = StyleSheet.create({
  mt: {
    marginTop: '100%',
    marginLeft: '40%',
  },
  bgBlue: {
    backgroundColor: '#6379F4',
    height: '100%',
  },
  bgWhite: {
    backgroundColor: '#FFFFFF',
    height: '100%',
  },
  bgBlueAndWhite: {
    backgroundColor: '#6379F4',
    height: '33%',
    borderBottomStartRadius: 20,
  },
});

export default commonStyle;
