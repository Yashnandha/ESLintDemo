import React from 'react';
import {Alert, StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';
const signUp = () => {
  const gand = () => {
    Alert.alert('Yash');
  };
  return (
    <View style={styles.container}>
      <Text onPress={gand}>Yash</Text>
    </View>
  );
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
