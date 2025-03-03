import React, {use} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../theme/colors';

const signUp = () => {
  return (
    <View style={styles.container}>
      <Text>{use()}</Text>
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
