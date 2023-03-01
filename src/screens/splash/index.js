import { View, Text, StyleSheet } from 'react-native';
import commonStyle from '../../styles/commonStyle';
//react native gak bisa naro class
//internal css in jsx

//global css/commonStyle
// const commonStyle = StyleSheet.create({
//   mt: {
//     marginTop: '100%',
//     marginLeft: '40%',
//   },
//   bgBlue: {
//     backgroundColor: '#6379F4',
//     height: '100%',
//   },
// });

//inpage css
const style = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '700',
    // fontFamily: 'Nunito Sans',
  },
});

const SplashScreen = () => {
  return (
    <View style={commonStyle.bgBlue}>
      <Text style={[commonStyle.mt, style.title]}>Fazzpay</Text>
    </View>
  );
};

export default SplashScreen;
