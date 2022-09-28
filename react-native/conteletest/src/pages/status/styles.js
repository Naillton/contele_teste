import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  pointList: {
    flex: 1,
    padding: (30, 10),
    minWidth: 400,
  },

  point: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    margin: 5,
    backgroundColor: '#D0D6DB',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
  },
});
