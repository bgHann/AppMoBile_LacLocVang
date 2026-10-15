import React from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { styles } from './style';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';

const OnbroardScreen = () => {
  const navigation = useNavigation<any>();
  const handleBack = () => {};
  return (
    <ImageBackground
      source={require('../../assets/img/onboard/onboard.png')}
      resizeMode="cover"
      style={styles.container}
    >
      {/* header */}
      {/* butoon back */}
      <Header
        title="Hướng Dẫn"
        onBack={handleBack}
        color="#DC1920"
        isOnback={1}
      />
      {/* ẢNH THỨ 1 */}
      <View style={styles.frame1}>
        <Image
          source={require('../../assets/img/onboard/onbroard.png')}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/img/onboard/Group31.png')}
          resizeMode="contain"
          style={styles.img2}
        />
      </View>
      {/* ảnh 2 */}
      {/* ANH THỨ 3*/}
      <View style={styles.frame2}>
        <Image
          source={require('../../assets/img/onboard/frame2.png')}
          resizeMode="contain"
        />
        <View style={styles.boxText}>
          <Text style={styles.textf2}>Lắc chắt chiu từng lượt</Text>
          <Text style={styles.textf2}>Nhận ngay 1 phần quà</Text>
          <Text style={styles.textf2}>Lắc tới bến chục lượt</Text>
          <Text style={styles.textf2}>Nhận một lúc 10 phần quà!</Text>
        </View>
      </View>
      {/* Nút button */}
      <TouchableOpacity
        style={{ paddingTop: 20 }}
        onPress={() => navigation.navigate('BanketScreen')}
      >
        <Image
          source={require('../../assets/img/onboard/button.png')}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default OnbroardScreen;
