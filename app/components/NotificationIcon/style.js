import {
  StyleSheet
} from 'react-native';

const iconSize = 32;
const badgeSize = iconSize * 0.6;

const styles = StyleSheet.create({
  container: {
    maxWidth: iconSize,
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
  badge: {
    height: badgeSize,
    width: badgeSize,
    borderRadius: badgeSize / 2,
    right: -4,
    top: 4,
    backgroundColor: '#F5096F', // カラーコードも定数化した方がよさそう
    color: 'white',
    textAlign: 'center',
    position: 'absolute',
  },
});

export default styles;