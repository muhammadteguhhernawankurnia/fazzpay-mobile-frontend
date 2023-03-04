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
  TextInput,
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

const SuccessOrFailedTransfer = ({ navigation }) => {
  return (
    <View style={commonStyle.bgBlueAndWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        {/* <View style={style.flexRow}>
          <View>
            <Image
              source={require('../../images/arrow-left-white.png')}
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
          <View style={style.user}>
            <Text
              style={{
                fontSize: 28,
                color: '#ffffff',
                fontWeight: '700',
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              Transfer Details
            </Text>
          </View>
        </View> */}
        {/* end content find receiver */}

        {/* start content card cofirmation history */}
        {/* success */}
        <View>
          <View
            style={{
              height: 100,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <Image
                source={require('../../images/success.png')}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  color: '#000',
                  fontWeight: '600',
                  marginTop: 10,
                }}
              >
                Transfer Success
              </Text>
            </View>
          </View>
        </View>
        {/* success */}
        {/* failed */}
        {/* <View>
          <View
            style={{
              height: 100,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View>
              <Image
                source={require('../../images/failed.png')}
                style={{
                  width: 60,
                  height: 60,
                  padding: 10,
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 32,
                  color: '#000',
                  fontWeight: '600',
                  marginTop: 10,
                }}
              >
                Transfer Failed
              </Text>
            </View>
          </View>
        </View> */}
        {/* failed */}
        {/* end content card confirmation history */}

        {/* start content card cofirmation history */}
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '700',
            }}
          >
            To
          </Text>
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
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/person-2.png')}
                style={{
                  width: 50,
                  height: 50,
                  padding: 10,
                  borderRadius: 10,
                }}
              />
            </View>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 26,
                  color: '#000',
                  fontWeight: '500',
                }}
              >
                Samuel Tayo
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '300',
                }}
              >
                +62 813-8492-9994
              </Text>
            </View>
          </View>
        </View>
        {/* end content card confirmation history */}

        {/* start content details */}
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#000',
              fontWeight: '700',
              marginTop: 20,
            }}
          >
            Details
          </Text>
          {/* start amount */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              width: 0,
              height: 2,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 70,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Amount
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: '#7A7886',
                  fontWeight: '700',
                }}
              >
                Rp. 100.000
              </Text>
            </View>
          </View>
        </View>
        {/* end amount */}
        {/* start balance left */}
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
              height: 70,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Balance Left
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: '#7A7886',
                  fontWeight: '700',
                }}
              >
                Rp. 20.000
              </Text>
            </View>
          </View>
        </View>
        {/* end balance left */}
        {/* start date times */}
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
              height: 70,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Date & Time
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: '#7A7886',
                  fontWeight: '700',
                }}
              >
                May 11, 2020, 12.20
              </Text>
            </View>
          </View>
        </View>
        {/* end date times */}
        {/* start date times */}
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
              height: 70,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 5,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                marginLeft: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '400',
                }}
              >
                Notes
              </Text>
              <Text
                style={{
                  fontSize: 26,
                  color: '#7A7886',
                  fontWeight: '700',
                }}
              >
                For buy some sego
              </Text>
            </View>
          </View>
        </View>
        {/* end date times */}
        {/* end content details */}

        {/* start content button continue */}
        <Pressable
          onPress={() => {
            navigation.navigate('HomeScreen');
          }}
          style={{
            backgroundColor: '#6379F4',
            padding: 22,
            borderRadius: 20,
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
            Back to Home
          </Text>
        </Pressable>
        {/* end content button continue */}
      </View>
    </View>
  );
};

export default SuccessOrFailedTransfer;
