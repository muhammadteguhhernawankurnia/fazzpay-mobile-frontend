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

const SearchReceiverScreen = ({ navigation }) => {
  return (
    <View style={commonStyle.bgWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        <View style={style.flexRow}>
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
              Find Receiver
            </Text>
          </View>
        </View>
        {/* end content find receiver */}

        {/* start content card search receiver */}
        <View>
          <View
            style={{
              backgroundColor: '#3A3D421A',
              height: 60,
              width: '95%',
              borderRadius: 20,
              margin: 10,
              display: 'flex',
              flexDirection: 'row',
              padding: 5,
              //   justifyContent: 'space-around',
              //   alignItems: 'flex-start',
            }}
          >
            <Image
              source={require('../../images/search.png')}
              style={{
                width: 30,
                height: 30,
                margin: 10,
                borderRadius: 20,
                justifyContent: 'center',
                alignItems: 'flex-start',
                color: '#4D4B57',
              }}
            />
            <Text
              style={{
                fontSize: 20,
                color: '#3A3D4266',
                fontWeight: '400',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#4D4B57',
                padding: 12,
              }}
            >
              Search receiver here
            </Text>
          </View>
        </View>
        {/* end content card search receiver */}

        {/* start content card quick access */}
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
              height: 150,
              width: '30%',
              borderRadius: 10,
              marginLeft: 0,
              display: 'flex',
              padding: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View>
              <Image
                source={require('../../images/person-3.png')}
                style={{
                  width: 80,
                  height: 80,
                  padding: 5,
                  borderRadius: 20,
                }}
              />
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate('InputAmountScreen');
              }}
            >
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    fontSize: 16,
                    color: '#4D4B57',
                    fontWeight: '700',
                    padding: 5,
                  }}
                >
                  Samuel Tayo
                </Text>
                <Text
                  style={{
                    fontSize: 13,
                    color: '#7A7886',
                    fontWeight: '400',
                    padding: 5,
                  }}
                >
                  -6500
                </Text>
              </View>
            </Pressable>

            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            ></View>
          </View>
        </View>
        {/* end content card quick access */}

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
            flexDirection: 'column',
          }}
        >
          <Text
            style={{
              fontSize: 18,
              color: '#514F5B',
              fontWeight: '700',
            }}
          >
            All Contacs
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#514F5B',
              fontWeight: '400',
            }}
          >
            200 Contact Founds
          </Text>
        </View>
        {/* end content title transaction history */}

        {/* start content card transaction history */}
        <View>
          <Pressable
            onPress={() => {
              navigation.navigate('InputAmountScreen');
            }}
          >
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
          </Pressable>
        </View>
        {/* end content card transaction history */}
      </View>
    </View>
  );
};

export default SearchReceiverScreen;
