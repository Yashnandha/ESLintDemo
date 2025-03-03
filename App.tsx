import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from './src/theme/colors';

const App = () => {
  return <View style={styles.container}></View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
