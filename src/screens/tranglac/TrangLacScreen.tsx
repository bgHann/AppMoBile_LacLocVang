import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import { styles } from '../banket/style';

const TrangLacScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/img/tranglac/Tranglac1.png')}
      resizeMode="cover"
      style={styles.container}
    >
      <Text>hj</Text>
    </ImageBackground>
  );
};

export default TrangLacScreen;
