import {
  StyleSheet
} from 'react-native';

const iconSize = 32;
const badgeSize = iconSize * 0.8;

const styles = StyleSheet.create({
  container: {
    maxWidth: iconSize,
    maxHeight: iconSize,
    width: iconSize,
    height: iconSize,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: iconSize,
    position: 'relative',
    resizeMode: 'contain'
  },
  badgeContainer: {
    maxWidth: badgeSize,
    maxHeight: badgeSize,
    width: badgeSize,
    height: badgeSize,
    borderRadius: badgeSize / 2,
    right: -4,
    top: -8,
    backgroundColor: '#F5096F', // カラーコードも定数化した方がよさそう
    justifyContent: 'center',
    position: 'absolute',
  },
  badgeText: {
    fontSize: 12,
    margin: 4,
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;