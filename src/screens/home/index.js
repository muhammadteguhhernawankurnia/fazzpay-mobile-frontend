import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  View,
  Text,
  StyleSheet,
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
  photo: {
    width: 80,
    height: 80,
    // backgroundColor: 'grey',
    margin: 10,
    borderRadius: 20,
  },
  user: {
    width: '50%',
    height: 80,
    // backgroundColor: 'grey',
    margin: 10,
  },
  notification: {
    width: '15%',
    height: 80,
    // backgroundColor: 'grey',
    marginTop: 25,
  },
});

const HomeScreen = ({ navigation }) => {
  // const [dataUser, setDataUser] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://192.168.43.63:5002/api/v1/users/b942d827-ca57-48b2-814d-8f578415ff1f'
  //     )
  //     .then((res) => setDataUser(res.data.data))
  //     .catch((err) => console.log(err.message));
  // }, []);
  return (
    <View style={commonStyle.bgWhite}>
      <View style={style.container}>
        {/* start content user */}
        <View style={style.flexRow}>
          <Pressable
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
          >
            <View>
              <Image
                source={require('../../images/person-1.png')}
                style={style.photo}
              />
            </View>
          </Pressable>
          <View style={style.user}>
            <Text style={[style.title]}>Hello,</Text>
            <Text style={[style.title]}>Robert Lewandowski</Text>
          </View>
          <View style={style.notification}>
            <Image
              source={require('../../images/bell.png')}
              style={{
                height: 40,
                width: 40,
              }}
            />
          </View>
        </View>
        {/* end content user */}

        {/* start content card balance */}
        <View>
          <View
            style={{
              backgroundColor: '#6379F4',
              height: 150,
              width: '90%',
              borderRadius: 20,
              margin: 10,
              display: 'flex',
              flexDirection: 'column',
              padding: 20,
              justifyContent: 'center',
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: '#ffffff',
                fontWeight: '500',
              }}
            >
              Balance
            </Text>
            <Text
              style={{
                fontSize: 42,
                color: '#ffffff',
                fontWeight: '800',
              }}
            >
              Rp. 120.000
            </Text>
            <Text
              style={{
                fontSize: 27,
                color: '#ffffff',
                fontWeight: '500',
              }}
            >
              +62 813-9387-7946
            </Text>
          </View>
        </View>
        {/* end content card balance */}

        {/* start content transfer and topup */}
        <View
          style={{
            // backgroundColor: '#6379F4',
            height: 50,
            width: '90%',
            borderRadius: 10,
            margin: 10,
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <View
            style={{
              backgroundColor: '#EAEDFF',
              height: 60,
              width: '45%',
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={require('../../images/arrow-up.png')} />
            <Pressable
              onPress={() => {
                navigation.navigate('SearchReceiverScreen');
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: '#000',
                  fontWeight: '600',
                }}
              >
                Transfer
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: '#EAEDFF',
              height: 60,
              width: '45%',
              borderRadius: 10,
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image source={require('../../images/plus.png')} />
            <Pressable
              onPress={() => {
                navigation.navigate('TopUpScreen');
              }}
            >
              <Text
                style={{
                  fontSize: 30,
                  color: '#000',
                  fontWeight: '600',
                }}
              >
                Top Up
              </Text>
            </Pressable>
          </View>
        </View>
        {/* end content transfer and topup */}

        {/* start content title transaction history */}
        <View
          style={{
            // backgroundColor: '#6379F4',
            height: 50,
            width: '90%',
            borderRadius: 10,
            margin: 10,
            padding: 10,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 24,
              color: '#000',
              fontWeight: '600',
            }}
          >
            Transaction History
          </Text>
          <Pressable
            onPress={() => {
              navigation.navigate('TransactionHistoryScreen');
            }}
          >
            <Text
              style={{
                fontSize: 24,
                color: '#6379F4',
                fontWeight: '300',
              }}
            >
              See all
            </Text>
          </Pressable>
        </View>
        {/* end content title transaction history */}

        {/* start content card transaction history */}
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
              height: 120,
              width: '100%',
              marginLeft: 0,
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              justifyContent: 'space-between',
            }}
          >
            <View>
              <Image
                source={require('../../images/person-2.png')}
                style={{
                  width: 80,
                  height: 80,
                  padding: 10,
                  borderRadius: 20,
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  color: '#000',
                  fontWeight: '500',
                }}
              >
                Samuel Tayo
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: '#7A7886',
                  fontWeight: '300',
                }}
              >
                Transfer
              </Text>
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{
                  fontSize: 27,
                  color: '#1EC15F',
                  fontWeight: '700',
                }}
              >
                +Rp50.000
              </Text>
            </View>
          </View>
        </View>
        {/* end content card transaction history */}
      </View>
    </View>
  );
};

export default HomeScreen;
