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

const InputAmountScreen = ({ navigation }) => {
  return (
    <View style={commonStyle.bgBlueAndWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        <View style={style.flexRow}>
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
              Transfer
            </Text>
          </View>
        </View>
        {/* end content find receiver */}

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
              borderRadius: 10,
              marginLeft: 0,
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              //   justifyContent: 'space-evenly',
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
                marginLeft: 20,
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
                +62 813-8492-9994
              </Text>
            </View>
          </View>
        </View>
        {/* end content card transaction history */}

        {/* start content input */}
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: '#B5BDCC',
              fontSize: 40,
            }}
          >
            0.00
          </Text>
          <Text
            style={{
              color: '#7C7895',
            }}
          >
            Rp. 120.000 Avaible
          </Text>
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
            placeholder='Add some notes'
          />
        </View>
        {/* end content input */}

        {/* start content button continue */}
        <Pressable
          onPress={() => {
            navigation.navigate('ConfirmationScreen');
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
            Confirmation
          </Text>
        </Pressable>

        {/* end content button continue */}
      </View>
    </View>
  );
};

export default InputAmountScreen;
