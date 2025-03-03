import React from 'react';
import {StyleSheet, View} from 'react-native';
import colors from '../../theme/colors';

const signUp = () => {
  console.log('sss');
  return <View style={styles.container}></View>;
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
});
