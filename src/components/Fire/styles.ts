import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flame: {
    bottom: 0,
    position: 'absolute',
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{rotate:'-45deg'}]
  },
  red: {
      width: 80,
      height: 80,
      backgroundColor: '#ff4500',
      shadowOffset:{width:0,height:0},
  },
  orange: {
      width: 60,
      height: 60,
      backgroundColor: '#ffa500',
      left: 10
  },
  gold: {
      width: 45,
      height: 45,
      backgroundColor: '#ffd700',
      left: 18,
  },
  white: {
      width: 35,
      height: 35,
      backgroundColor: '#ffffe0',
      left: 22,
  },
  flameWrapper: {
      bottom: 100,
      left:140,
      position: 'absolute',
  }
});