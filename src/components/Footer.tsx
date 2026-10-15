import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const [selected, setSelected] = useState(0);
  const navigation = useNavigation<any>();
  const items = [
    {
      id: 1,
      title: 'Lắc lộc vàng',
      icon: require('../assets/img/banket/phoneicon1.png'),
      screen: 'TrangLacScreen',
    },
    {
      id: 2,
      title: 'Lì xì vàng',
      icon: require('../assets/img/banket/lxvcon1.png'),
      screen: 'BanketScreen',
    },
    {
      id: 3,
      title: 'Kho lộc',
      icon: require('../assets/img/banket/kholocicon1.png'),
      screen: 'KhoLocScreen',
    },
  ];
  return (
    <View style={styles.container}>
      {items.map(item => (
        <Pressable
          key={item.id}
          onPress={() => {
            setSelected(item.id);
            navigation.navigate(item.screen as never);
          }}
          style={[styles.box, selected === item.id && styles.boxSelected]}
        >
          <Image source={item.icon} />
          <Text style={styles.text}>{item.title}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 71,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#FFF9E1',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxSelected: {
    backgroundColor: '#FFD233',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'SVN-Cookies',
    fontWeight: 400,
    color: '#C2030B',
  },
});

export default Footer;
