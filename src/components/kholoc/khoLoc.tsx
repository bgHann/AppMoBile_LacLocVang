import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React, { useState } from 'react';

const khoLoc = () => {
  const [select, setSelect] = useState(1);
  const data = [
    { id: 1, title: 'Lắc lộc vàng' },
    { id: 2, title: 'Lì xì vàng' },
    { id: 3, title: 'Mã số\n may mắn' },
  ];
  return (
    <View style={styles.container}>
      {data.map(item => (
        <Pressable
          onPress={() => setSelect(item.id)}
          key={item.id}
          style={[styles.box, select === item.id && styles.boxSelected]}
        >
          <Text style={[styles.text, select === item.id && styles.textSelet]}>
            {item.title}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 335,
    height: 51,
    top: 40,
    backgroundColor: '#FFF9E1',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  boxSelected: {
    backgroundColor: '#C2030B',

    height: 40,
    borderRadius: 10,
  },
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'SVN-Cookies',
    fontWeight: 400,
    color: '#C2030B',
    textAlign: 'center',
  },
  textSelet: {
    fontSize: 14,
    lineHeight: 18,
    fontFamily: 'SVN-Cookies',
    fontWeight: 400,
    color: 'white',
  },
});
export default khoLoc;
//
