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
  pinContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  pinInput: {
    borderWidth: 2,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 24,
    width: '27%',
    height: 60,
    margin: 2,
  },
});

const ChangePinScreen = ({ navigation }) => {
  const [pin, setPin] = useState('');

  const handlePinChange = (value, index) => {
    let newPin = pin;
    newPin = newPin.substr(0, index) + value + newPin.substr(index + 1);
    setPin(newPin);
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
              Change PIN
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
                Enter your current 6 digits FazzPay PIN below to continue to the
                next steps.
              </Text>
            </View>
          </View>
        </View>
        {/* end content 1 */}

        {/* form */}
        <View style={style.container}>
          <View style={style.pinContainer}>
            <TextInput
              style={style.pinInput}
              value={pin.charAt(0)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 0)}
              autoFocus
            />
            <TextInput
              style={style.pinInput}
              value={pin.charAt(1)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 1)}
            />
            <TextInput
              style={style.pinInput}
              value={pin.charAt(2)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 2)}
            />
            <TextInput
              style={style.pinInput}
              value={pin.charAt(3)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 3)}
            />
            <TextInput
              style={style.pinInput}
              value={pin.charAt(4)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 4)}
            />
            <TextInput
              style={style.pinInput}
              value={pin.charAt(5)}
              maxLength={1}
              keyboardType='numeric'
              onChangeText={(value) => handlePinChange(value, 5)}
            />
          </View>
        </View>
        {/* form */}

        {/* continue button */}
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
            Continue
          </Text>
        </Pressable>
        {/* continue button */}

        {/* end content details */}
      </View>
    </View>
  );
};

export default ChangePinScreen;
