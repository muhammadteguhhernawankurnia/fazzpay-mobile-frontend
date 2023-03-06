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
  ToastAndroid,
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

const ProfileScreen = ({ navigation }) => {
  // const userId = AsyncStorage.getItem('@userData');
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        // `http://192.168.43.63:5002/api/v1/users/3d2996f9-5912-4cf7-807e-eead1213def7` epul
        `http://192.168.43.63:5002/api/v1/users/6d658c13-02fa-4057-b7e4-dd95ff74b681`
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

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={commonStyle.bgWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        <View style={style.flexRow}>
          <Pressable
            onPress={() => {
              navigation.navigate('HomeScreen');
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
              Profile
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
              <View>
                <Image
                  source={require('../../images/person-1.png')}
                  style={{
                    width: 60,
                    height: 60,
                    padding: 10,
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                  marginTop: 10,
                  alignItems: 'center',
                }}
              >
                Edit
              </Text>
              <Text
                style={{
                  fontSize: 24,
                  color: '#4D4B57',
                  fontWeight: '700',
                  alignItems: 'center',
                }}
              >
                {/* Robert Chandler */}
                {/* {isLoggin.value ? isLoggin.data.user.email : ''} */}
                {`${
                  dataUser.length !== 0
                    ? dataUser.data.first_name + ' ' + dataUser.data.last_name
                    : ''
                }`}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                  alignItems: 'center',
                }}
              >
                {/* +62 813-9387-7946 */}
                {`${dataUser.length !== 0 ? dataUser.data.phone : ''}`}
              </Text>
            </View>
          </View>
        </View>
        {/* end content 1 */}

        {/* start content details */}
        {/* start 1 */}
        <Pressable
          onPress={() => {
            navigation.navigate('PersonalInfoScreen');
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#E5E8ED',
                elevation: 5,
                shadowColor: '#000',
                width: 0,
                height: 2,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                height: 60,
                width: '100%',
                borderRadius: 10,
                marginLeft: 0,
                margin: 5,
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                marginTop: 30,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#4D4B57',
                    fontWeight: '700',
                  }}
                >
                  Personal Info
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}
              >
                <Image
                  source={require('../../images/arrow-right.png')}
                  style={{
                    width: 40,
                    height: 40,
                    padding: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </Pressable>
        {/* end 1 */}

        {/* start 2 */}
        <Pressable
          onPress={() => {
            navigation.navigate('ChangePasswordScreen');
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#E5E8ED',
                elevation: 5,
                shadowColor: '#000',
                width: 0,
                height: 2,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                height: 60,
                width: '100%',
                borderRadius: 10,
                marginLeft: 0,
                margin: 5,
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#4D4B57',
                    fontWeight: '700',
                  }}
                >
                  Change Password
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}
              >
                <Image
                  source={require('../../images/arrow-right.png')}
                  style={{
                    width: 40,
                    height: 40,
                    padding: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </Pressable>
        {/* end 2 */}

        {/* start 3 */}
        <Pressable
          onPress={() => {
            navigation.navigate('ChangePinScreen');
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#E5E8ED',
                elevation: 5,
                shadowColor: '#000',
                width: 0,
                height: 2,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                height: 60,
                width: '100%',
                borderRadius: 10,
                marginLeft: 0,
                margin: 5,
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#4D4B57',
                    fontWeight: '700',
                  }}
                >
                  Change PIN
                </Text>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 10,
                }}
              >
                <Image
                  source={require('../../images/arrow-right.png')}
                  style={{
                    width: 40,
                    height: 40,
                    padding: 10,
                  }}
                />
              </View>
            </View>
          </View>
        </Pressable>
        {/* end 3 */}

        {/* start 4 */}
        <View>
          <View
            style={{
              backgroundColor: '#E5E8ED',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 60,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#4D4B57',
                  fontWeight: '700',
                }}
              >
                Notification
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              <Switch
                trackColor={{ false: '#767577', true: '#6379F4' }}
                thumbColor={isEnabled ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor='#3e3e3e'
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        {/* end 4 */}

        {/* start 5 */}
        <Pressable
          onPress={() => {
            AsyncStorage.removeItem('@userData');
            alert('success logout');
          }}
        >
          <View>
            <View
              style={{
                backgroundColor: '#E5E8ED',
                elevation: 5,
                shadowColor: '#000',
                width: 0,
                height: 2,
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                height: 60,
                width: '100%',
                borderRadius: 10,
                marginLeft: 0,
                margin: 5,
                display: 'flex',
                flexDirection: 'row',
                padding: 20,
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    color: '#FF5B37',
                    fontWeight: '700',
                  }}
                >
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </Pressable>
        {/* end 5 */}

        {/* end content details */}
      </View>
    </View>
  );
};

export default ProfileScreen;
