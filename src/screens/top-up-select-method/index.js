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
  TouchableOpacity,
  Modal,
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

const TopUpSelectMethodScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const onPressButton = () => {
    setModalVisible(true);
  };

  const onCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={commonStyle.bgBlueAndWhite}>
      <View style={style.container}>
        {/* start content find receiver */}
        <View style={style.flexRow}>
          <Pressable
            onPress={() => {
              navigation.navigate('TopUpScreen');
            }}
          >
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
          </Pressable>
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
              Select Method to Top Up
            </Text>
          </View>
        </View>
        {/* end content find receiver */}

        {/* start content card cofirmation history */}
        <View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              elevation: 5,
              shadowColor: '#000',
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              height: 300,
              width: '100%',
              borderRadius: 10,
              display: 'flex',
              flexDirection: 'row',
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
              {/* start 6 */}
              <View
                style={{
                  shadowColor: '#000',
                  height: 45,
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'row',
                  //   padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}
              >
                <View>
                  <Image
                    source={require('../../images/emok.png')}
                    style={{
                      width: 60,
                      height: 40,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  />
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    // justifyContent: 'center',
                    marginLeft: 5,
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#7A7886',
                      fontWeight: '500',
                    }}
                  >
                    Bank Emok
                  </Text>
                </View>
              </View>
              {/* end 6 */}
              {/* virtual account */}
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                }}
              >
                Virtual Account Number
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                  width: '100%',
                }}
              >
                2389 081393877946
              </Text>
              {/* virtual account */}
              {/* proses verifikasi */}
              <Text
                style={{
                  fontSize: 14,
                  color: '#6379F4',
                  fontWeight: '400',
                }}
              >
                Proses verifikasi ini membutuhkan waktu 5 menit setelah
                pembayaran berhasil
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '700',
                  borderBottomWidth: 1,
                  borderBottomColor: 'black',
                }}
              >
                Hanya menerima dari Bank Emok
              </Text>
              {/* proses verifikasi */}
              {/* virtual account */}
              <Text
                style={{
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                }}
              >
                Nominal Top Up
              </Text>
              <Text
                style={{
                  fontSize: 40,
                  color: '#6379F4',
                  fontWeight: '700',
                  width: '100%',
                }}
              >
                Rp. 500.000
              </Text>
              {/* virtual account */}
              {/* <Pressable
                style={{
                  backgroundColor: '#6379F4',
                  borderRadius: 10,
                  height: 40,
                  width: '100%',
                  marginTop: 10,
                }}
              > */}
              <TouchableOpacity
                onPress={onPressButton}
                activeOpacity={0.8}
                style={{
                  backgroundColor: '#6379F4',
                  borderRadius: 10,
                  height: 40,
                  width: '100%',
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: '#ffffff',
                    fontSize: 20,
                    fontWeight: 'bold',
                    padding: 5,
                    textAlign: 'center',
                    justifyContent: 'center',
                    marginTop: 2,
                  }}
                >
                  Konfirmasi
                </Text>
              </TouchableOpacity>
              <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                // onRequestClose={onCloseModal}
              >
                <View
                  style={{
                    flex: 1,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    style={{
                      backgroundColor: '#FFF',
                      borderRadius: 10,
                      padding: 20,
                      width: '80%',
                      height: 300,
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
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          marginBottom: 10,
                        }}
                      />
                    </View>

                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}
                    >
                      Top Up Rp. 500.000 Success
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#6379F4',
                        borderRadius: 5,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingHorizontal: 20,
                      }}
                      // onPress={onCloseModal}
                      onPress={() => {
                        navigation.navigate('HomeScreen');
                      }}
                      activeOpacity={0.8}
                    >
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 16,
                        }}
                      >
                        Back to Homepage
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
              {/* </Pressable> */}
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
            Top Up Fazzpay
          </Text>
          {/* start amount */}
          {/* <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Image
                source={require('../../images/seabank.png')}
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Rekening SeaBank (Direct Debit)
              </Text>
            </View>
          </View> */}

          {/* end 1 */}

          {/* start 2 */}
          {/* <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Image
                source={require('../../images/bri.png')}
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                BRI Direct Debit
              </Text>
            </View>
          </View> */}
          {/* end 2 */}

          {/* start 3 */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/bca.jpg')}
                style={{
                  width: 40,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                BCA OneKlik
              </Text>
            </View>
          </View>
          {/* end 3 */}

          {/* start 4 */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/bsi.png')}
                style={{
                  width: 60,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Bank Syariah Indonesia (BSI)
              </Text>
            </View>
          </View>
          {/* end 4 */}

          {/* start 5 */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/century.jpg')}
                style={{
                  width: 60,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Bank Century
              </Text>
            </View>
          </View>
          {/* end 5 */}

          {/* start 6 */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/emok.png')}
                style={{
                  width: 60,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Bank Emok
              </Text>
            </View>
          </View>
          {/* end 6 */}

          {/* start 7 */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
            }}
          >
            <View>
              <Image
                source={require('../../images/mandiri.png')}
                style={{
                  width: 60,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Bank Mandiri
              </Text>
            </View>
          </View>
          {/* end 7 */}

          {/* start 8 */}
          {/* <View
            style={{
              backgroundColor: '#FFFFFF',
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
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 10,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Image
                source={require('../../images/other.png')}
                style={{
                  width: 60,
                  height: 40,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Transfer Bank
              </Text>
            </View>
          </View> */}
          {/* end 8 */}
        </View>

        {/* end content details */}
      </View>
    </View>
  );
};

export default TopUpSelectMethodScreen;
