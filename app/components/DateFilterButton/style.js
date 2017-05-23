import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  defaultContainerStyle: {
    marginTop: 8,
    marginBottom: 8,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 16,
    justifyContent: 'center',
  },

  selectedContainerStyle: {
    backgroundColor: '#00ff00',
  },

  defaultTextStyle: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: 16,
    margin: 4,
  },

  selectedTextStyle: {
    color: 'white',
  },
});