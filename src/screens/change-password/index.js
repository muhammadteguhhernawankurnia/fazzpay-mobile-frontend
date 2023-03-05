import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Switch,
} from 'react-native';
import commonStyle from '../../styles/commonStyle';

//inpage css
const style = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    color: '#000',
    fontWeight: '700',
    padding: 3,
    // fontFamily: 'Nunito Sans',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  user: {
    width: '50%',
    height: 80,
    margin: 10,
  },
});

const ChangePasswordScreen = ({ navigation }) => {
  // const userId = AsyncStorage.getItem('@userData');
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://192.168.43.63:5002/api/v1/users/3d2996f9-5912-4cf7-807e-eead1213def7`
      )
      // .get(
      //   `http://192.168.43.63:5002/api/v1/users/${
      //     isLoggin.value ? isLoggin.data.user.email : ''
      //   }`
      // )
      .then((res) => {
        console.log(res.data.data);
        setDataUser(res.data.data);
      })
      .catch((err) => console.log(err.message));
  }, [isLoggin]);

  const [isLoggin, setIsLoggin] = React.useState({
    value: false,
    data: {},
  });

  const getDataAuth = async () => {
    try {
      const value = await AsyncStorage.getItem('@userData');
      console.log(value);
      if (value !== null) {
        setIsLoggin({
          value: true,
          data: JSON.parse(value),
        });
      } else {
        setIsLoggin({
          value: false,
          data: {},
        });
      }
    } catch (e) {
      // error reading value
    }
  };
  React.useEffect(() => {
    getDataAuth();
  }, []);

  return (
    <View style={commonStyle.bgWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        <View style={style.flexRow}>
          <Pressable
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
          >
            <View>
              <Image
                source={require('../../images/arrow-left.png')}
                style={{
                  width: 40,
                  height: 40,
                  margin: 10,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              />
            </View>
          </Pressable>
          <View style={style.user}>
            <Text
              style={{
                fontSize: 28,
                color: '#000',
                fontWeight: '700',
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Change Password
            </Text>
          </View>
        </View>
        {/* end content find receiver */}

        {/* start content 1 */}
        <View>
          <View>
            <View
              style={{
                height: 100,
                width: '100%',
                borderRadius: 10,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                  alignItems: 'center',
                }}
              >
                You must enter your current password and then type your new
                password twice.
              </Text>
            </View>
          </View>
        </View>
        {/* end content 1 */}

        {/* form */}
        <TextInput
          style={{
            padding: 10,
            width: '100%',
            height: 40,
            borderBottomWidth: 1,
            borderColor: '#A9A9A999',
            marginVertical: 10,
            padding: 10,
          }}
          placeholder='Current password'
          secureTextEntry
        >
          {/* {`${dataUser.length !== 0 ? dataUser.data.password : ''}`} */}
        </TextInput>
        <TextInput
          style={{
            padding: 10,
            width: '100%',
            height: 40,
            borderBottomWidth: 1,
            borderColor: '#A9A9A999',
            marginVertical: 10,
            padding: 10,
          }}
          placeholder='New password'
          secureTextEntry
        />
        <TextInput
          style={{
            padding: 10,
            width: '100%',
            height: 40,
            borderBottomWidth: 1,
            borderColor: '#A9A9A999',
            marginVertical: 10,
            padding: 10,
          }}
          placeholder='Confirm password'
          secureTextEntry
        />

        {/* manage button */}
        <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: '#6379F4',
            padding: 22,
            borderRadius: 10,
            width: '100%',
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
            Change Password
          </Text>
        </Pressable>
        {/* manage button */}

        {/* end content details */}
      </View>
    </View>
  );
};

export default ChangePasswordScreen;
