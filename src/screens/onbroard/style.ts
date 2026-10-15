import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    flex: 1,
  },
  frame1: {
    paddingTop: 63,
    position: 'relative',
    alignItems: 'center',
  },
  frame2: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: -10,
  },
  textf2: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: 700,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SVN-Cookies',
  },
  img2: {
    height: 8,
    width: 44,
    position: 'absolute',
    bottom: 35,
  },
  boxText: {
    width: 335,
    height: 151,
    position: 'absolute',
    left: '0%',
    top: '0%',
    display: 'flex',
    justifyContent: 'center',
  },
});
