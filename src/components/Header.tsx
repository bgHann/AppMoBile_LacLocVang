import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { styles } from '../screens/onbroard/style';
type HeaderProps = {
  title: string;
  onBack?: () => void;
  img?: ImageSourcePropType;
  color: string;
  isOnback?: number;
};

const Header = ({ title, onBack, img, color, isOnback }: HeaderProps) => {
  return (
    <View style={{ alignItems: 'center', position: 'relative', width: '100%' }}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 60,
          left: 20,
          height: 52,
          width: 61,
        }}
        onPress={onBack}
      >
        {isOnback == 1 && (
          <Image
            source={require('../assets/img/onboard/ButtonBack.png')}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
      <Text
        style={{
          fontWeight: 400,
          lineHeight: 33,
          fontSize: 24,
          color: color,
          marginTop: 60,
          fontFamily: 'SVN-Cookies',
        }}
      >
        {title}
      </Text>
      {img && (
        <Image
          source={img}
          resizeMode="contain"
          style={{ position: 'absolute', top: 65, left: 319 }}
        />
      )}
    </View>
  );
};

export default Header;
