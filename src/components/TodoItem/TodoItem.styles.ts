import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
  actionButtons: {
    flexDirection: 'row',
  },
  text: {},
  textCompleted: {
    textDecorationLine: 'line-through',
  },
});

export default styles;
