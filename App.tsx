import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from './src/theme/colors';

const App = () => {
  return <View style={styles.container}></View>;
};

export default App;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
});
