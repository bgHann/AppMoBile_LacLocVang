import { View, Text, ImageBackground, Image } from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import { styles } from '../onbroard/style';
import Footer from '../../components/Footer';
import KhoLoc from '../../components/kholoc/khoLoc';

const KhoLocScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/kholoc/khoLoc.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <Header title="Kho Lộc" color="#FAD93C" />
      <Image
        source={require('../../assets/img/kholoc/Frame625390.png')}
        resizeMode="contain"
        style={{ top: 12 }}
      />
      <KhoLoc />
      <Image
        source={require('../../assets/img/kholoc/frame1.png')}
        resizeMode="contain"
        style={{ width: 335, height: 511, top: 50 }}
      />
      <Footer />
    </ImageBackground>
  );
};

export default KhoLocScreen;
