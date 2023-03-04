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
  user: {
    width: '50%',
    height: 80,
    // backgroundColor: 'grey',
    margin: 10,
  },
});

const TransactionHistoryScreen = ({ navigation }) => {
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
                  color: '#4D4B57',
                }}
              />
            </View>
          </Pressable>
          <View style={style.user}>
            <Text
              style={{
                fontSize: 28,
                color: '#4D4B57',
                fontWeight: '700',
                padding: 3,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              History
            </Text>
          </View>
        </View>
        {/* end content find receiver */}

        {/* start content title transaction history */}
        <View
          style={{
            // backgroundColor: '#6379F4',
            height: 50,
            width: '100%',
            borderRadius: 10,
            margin: 10,
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#7A7886',
              fontWeight: '700',
            }}
          >
            This Week
          </Text>
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

export default TransactionHistoryScreen;
