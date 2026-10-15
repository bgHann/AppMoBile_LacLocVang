import { View, Text, Image, ImageBackground } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import { styles } from '../banket/style';
import Footer from '../../components/Footer';

const BanketScreen = () => {
  const navigation = useNavigation<any>();
  const handleBack = () => {
    navigation.goBack();
    return;
  };
  return (
    <ImageBackground
      source={require('../../assets/img/banket/banket.png')}
      style={styles.container}
    >
      <Header
        title="Đại Hội Tranh Tài"
        color="#DC1920"
        isOnback={1}
        onBack={handleBack}
        img={require('../../assets/img/banket/Button.png')}
      />
      <Image
        style={{ top: 28 }}
        source={require('../../assets/img/banket/Frame625336.png')}
      />

      <Footer />
    </ImageBackground>
  );
};

export default BanketScreen;
