import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },

  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    margin: 40,
    width: '80%',
    height: '10%',
    borderBottomColor: 'black',
    borderBottomWidth: 4,
  },

  title: {
    fontSize: 20,
    letterSpacing: 2,
    fontWeight: 'bold',
  },

  location: {
    margin: 30,
    width: '80%',
    height: '18%',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  local: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  btnsair: {
    width: 60,
    height: 40,
    backgroundColor: '#ffbd2c',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  interval: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  contBtn: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 340,
    marginTop: 20,
  },
});
