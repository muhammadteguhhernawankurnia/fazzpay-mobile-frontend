import { View, Text, StyleSheet } from 'react-native';
import commonStyle from '../../styles/commonStyle';

//inpage css
const style = StyleSheet.create({
  title: {
    fontSize: 32,
    color: '#ffffff',
    fontWeight: '700',
    // fontFamily: 'Nunito Sans',
  },
});

const SignUpScreen = () => {
  return (
    <View style={commonStyle.bgBlue}>
      <Text style={[commonStyle.mt, style.title]}>SignUp Bosquh</Text>
    </View>
  );
};

export default SignUpScreen;
