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
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: '700',
    // fontFamily: 'Nunito Sans',
  },
});

const HomeScreen = () => {
  const [dataUser, setDataUser] = useState([]);

  useEffect(() => {
    axios
      .get(
        'http://192.168.43.63:5002/api/v1/users/b942d827-ca57-48b2-814d-8f578415ff1f'
      )
      .then((res) => setDataUser(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <View style={commonStyle.bgWhite}>
      <Text style={[style.title]}>Hello,</Text>
      {/* <Text style={[style.title]}>{user.first_name}</Text>
      <Text style={[style.title]}>{user.balance}</Text> */}
    </View>
  );
};

export default HomeScreen;
