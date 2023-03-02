import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
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
    marginBottom: 30,
    // fontFamily: 'Nunito Sans',
  },
  descriptionLogin: {
    fontSize: 16,
    fontWeight: '400',
    color: '#3A3D4299',
    marginLeft: '3%',
    marginBottom: 10,
  },
  //
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    padding: 10,
    width: '80%',
    height: 40,
    borderBottomWidth: 1,
    borderColor: '#A9A9A999',
    marginVertical: 10,
    padding: 10,
  },
});

const ForgotPasswordSendEmailScreen = ({ navigation }) => {
  return (
    <View style={[commonStyle.bgWhite, style.container]}>
      <Text style={[style.title]}>Reset Password</Text>
      <Text style={[style.descriptionLogin]}>
        Enter your FazzPay e-mail so we can send
      </Text>
      <Text style={[style.descriptionLogin]}>you a password reset link.</Text>
      <TextInput style={style.input} placeholder='Enter your e-mail' />

      <Pressable
        onPress={() => {}}
        style={{
          backgroundColor: '#6379F4',
          padding: 22,
          borderRadius: 20,
          width: '80%',
          marginTop: 30,
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Confirm
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
        style={{
          backgroundColor: '#6379F4',
          padding: 22,
          borderRadius: 20,
          width: '80%',
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: '#ffffff',
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Login
        </Text>
      </Pressable>
    </View>
  );
};

export default ForgotPasswordSendEmailScreen;
