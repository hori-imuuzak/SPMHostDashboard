import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  viewPager: {
    flex: 1,
    paddingTop: 16,
  },

  header: {
    backgroundColor: 'white',
    maxHeight: 40,
    flex: 1,
    flexDirection: 'row',
  },

  headerPrev: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  headerNext: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },

  headerButton: {
    height: 16,
    tintColor: '#0f0',
  },

  headerTitleContainer: {
    flex: 1,
    justifyContent: 'center',
    borderStyle: 'solid',
    borderBottomWidth: 2,
    borderBottomColor: '#0f0',
  },

  headerTitle: {
    fontSize: 18,
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },

  panelListHeader: {
    paddingLeft: 8,
    fontSize: 16,
    marginTop: 24,
    justifyContent: 'center',
    color: 'gray',
  },

  panelList: {
    flexDirection: 'row',  
    flexWrap: 'wrap',
  },

  panel: {
    flex: 1,
    backgroundColor: 'white',
    height: 100,
    padding: 10,
    marginTop: 8,
    marginBottom: 8,
  },
  panel_left: {
    marginLeft: 8,
    marginRight: 4,
  },
  panel_right: {
    marginLeft: 4,
    marginRight: 8,
  }

})