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

const PersonalInfoScreen = ({ navigation }) => {
  // const userId = AsyncStorage.getItem('@userData');
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        // `http://192.168.43.63:5002/api/v1/users/3d2996f9-5912-4cf7-807e-eead1213def7`
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
              Personal Info
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
                We got your personal information from the sign up proccess. If
                you want to make changes on your information, contact our
                support.
              </Text>
            </View>
          </View>
        </View>
        {/* end content 1 */}

        {/* start content details */}
        {/* start 1 */}
        <View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 80,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              marginTop: 30,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                First Name
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#514F5B',
                  fontWeight: '700',
                }}
              >
                {/* Robert */}
                {`${dataUser.length !== 0 ? dataUser.data.first_name : ''}`}
              </Text>
            </View>
          </View>
        </View>
        {/* end 1 */}

        {/* start 2 */}
        <View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 80,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Last Name
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#514F5B',
                  fontWeight: '700',
                }}
              >
                {/* Chaniago */}
                {`${dataUser.length !== 0 ? dataUser.data.last_name : ''}`}
              </Text>
            </View>
          </View>
        </View>
        {/* end 2 */}

        {/* start 3 */}
        <View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 80,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Verified E-mail
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#514F5B',
                  fontWeight: '700',
                }}
              >
                {/* pewdiepie1@gmail.com */}
                {`${dataUser.length !== 0 ? dataUser.data.email : ''}`}
              </Text>
            </View>
          </View>
        </View>
        {/* end 3 */}

        {/* start 4 */}
        <View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 80,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Phone Number
              </Text>
              <Text
                style={{
                  fontSize: 22,
                  color: '#514F5B',
                  fontWeight: '700',
                }}
              >
                {/* +62 813-9387-7946 */}
                {`${dataUser.length !== 0 ? dataUser.data.phone : ''}`}
              </Text>
            </View>
          </View>
        </View>
        {/* end 4 */}

        {/* manage button */}
        {/* <Pressable
          onPress={() => {}}
          style={{
            backgroundColor: '#6379F4',
            padding: 22,
            borderRadius: 10,
            width: '100%',
            marginTop: 20,
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
            Save
          </Text>
        </Pressable> */}
        {/* manage button */}

        {/* end content details */}
      </View>
    </View>
  );
};

export default PersonalInfoScreen;
