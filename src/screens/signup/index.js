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

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={[commonStyle.bgWhite, style.container]}>
      <Text style={[style.title]}>Sign Up</Text>
      <Text style={[style.descriptionLogin]}>
        Create your account to access FazzPay.
      </Text>
      <TextInput style={style.input} placeholder='Enter your e-mail' />
      <TextInput
        style={style.input}
        placeholder='Enter your password'
        secureTextEntry
      />

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
          Sign Up
        </Text>
      </Pressable>

      <Pressable
        onPress={() => {
          navigation.navigate('LoginScreen');
        }}
      >
        <Text style={{ fontSize: 14, marginTop: 10, marginBottom: 10 }}>
          Already have an account? Let’s Login
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
