import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 300,
    backgroundColor: 'white',

    marginLeft: 8,
    marginRight: 8,

    alignItems: 'center',
    justifyContent: 'center',

    // カードはこんな感じ？
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  }
})