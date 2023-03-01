import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import commonStyle from '../../styles/commonStyle';

//inpage css
const style = StyleSheet.create({
  mtLogin: {
    marginTop: '10%',
    marginLeft: '40%',
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#000',
    // fontFamily: 'Nunito Sans',
  },
  descriptionLogin: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3D4299',
    marginLeft: '3%',
  },
  //
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
});

const LoginScreen = () => {
  return (
    <View style={[commonStyle.bgWhite, style.container]}>
      <Text style={[style.title]}>Login</Text>
      <Text style={[style.descriptionLogin]}>
        Login to your existing account to access all the features in FazzPay.
      </Text>
      <TextInput style={style.input} placeholder='Email' />
      <TextInput style={style.input} placeholder='Password' secureTextEntry />
      <Button title='Login' />
    </View>
  );
};

export default LoginScreen;
