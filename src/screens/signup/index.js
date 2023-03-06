import axios from 'axios';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  ToastAndroid,
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
  const [formSignUp, setFormSignUp] = useState({
    email: '',
    password: '',
  });

  const handleSignUp = () => {
    axios({
      url: 'http://192.168.43.63:5002/api/v1/auth/register',
      method: 'post',
      data: formSignUp,
    })
      .then((res) => {
        AsyncStorage.setItem('@userData', JSON.stringify(res.data.data));
        ToastAndroid.show('success to sign up', ToastAndroid.SHORT);
      })
      .catch((err) => {
        ToastAndroid.show('failed to sign up', ToastAndroid.SHORT);
        console.log(err.response);
      });
  };

  return (
    <View style={[commonStyle.bgWhite, style.container]}>
      <Text style={[style.title]}>Sign Up</Text>
      <Text style={[style.descriptionLogin]}>
        Create your account to access FazzPay.
      </Text>
      {/* <TextInput style={style.input} placeholder='Enter your username' /> */}
      <TextInput
        onChangeText={(text) => setFormSignUp({ ...formSignUp, email: text })}
        style={style.input}
        placeholder='Enter your e-mail'
        keyboardType='email-address'
        autoCapitalize='none'
      />
      <TextInput
        onChangeText={(text) =>
          setFormSignUp({ ...formSignUp, password: text })
        }
        style={style.input}
        placeholder='Enter your password'
        secureTextEntry
      />

      <Pressable
        onPress={handleSignUp}
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
