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

const TopUpScreen = ({ navigation }) => {
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
              navigation.navigate('HomeScreen');
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
              Top Up
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
              <TouchableOpacity
                // style={styles.button}
                onPress={onPressButton}
                activeOpacity={0.8}
              >
                <Image
                  source={require('../../images/plus.png')}
                  style={{
                    width: 80,
                    height: 80,
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: '#EBEEF2',
                  }}
                />
              </TouchableOpacity>
              <Modal
                visible={modalVisible}
                animationType='fade'
                transparent={true}
                onRequestClose={onCloseModal}
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
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 18,
                        fontWeight: 'bold',
                        marginBottom: 10,
                      }}
                    >
                      Ini Modal
                    </Text>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#007AFF',
                        borderRadius: 5,
                        height: 50,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        paddingHorizontal: 20,
                      }}
                      onPress={onCloseModal}
                      activeOpacity={0.8}
                    >
                      <Text
                        style={{
                          color: '#FFF',
                          fontSize: 16,
                        }}
                      >
                        Tutup Modal
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </Modal>
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
                  fontSize: 14,
                  color: '#000',
                  fontWeight: '400',
                }}
              >
                Virutal Account Number
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#7A7886',
                  fontWeight: '700',
                }}
              >
                2389 081393877946
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
            How to Top Up
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
              height: 60,
              width: '100%',
              borderRadius: 10,
              marginLeft: 0,
              margin: 2,
              display: 'flex',
              flexDirection: 'row',
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                1
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Go to the nearest ATM or you can use E-Banking.
              </Text>
            </View>
          </View>

          {/* end 1 */}

          {/* start 2 */}
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                2
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Type your security number on the E-Banking.
              </Text>
            </View>
          </View>
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                3
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Select “Transfer” in the menu
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                4
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Type the virtual account number that we provide you at the top.
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                5
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Type the amount of the money you want to top up.
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                6
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Read the summary details
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                7
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                Press transfer / top up
              </Text>
            </View>
          </View>
          {/* end 7 */}

          {/* start 8 */}
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
              padding: 20,
              //   justifyContent: 'space-evenly',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: 20,
                  color: '#6379F4',
                  fontWeight: '700',
                }}
              >
                8
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
              <Text
                style={{
                  fontSize: 20,
                  color: '#7A7886',
                  fontWeight: '500',
                }}
              >
                You can see your money in Zwallet within 3 hours.
              </Text>
            </View>
          </View>
          {/* end 8 */}
        </View>

        {/* end content details */}
      </View>
    </View>
  );
};

export default TopUpScreen;
