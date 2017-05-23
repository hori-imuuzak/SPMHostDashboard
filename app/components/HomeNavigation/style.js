import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },

  userIcon: {
    flex: 0.8,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  hostName: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  notification: {
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingRight: 10,
  }
});

export default styles;