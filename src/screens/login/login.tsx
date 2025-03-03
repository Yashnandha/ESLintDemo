import React from 'react';
import {Text, View} from 'react-native';
import styles from './login.style';
import useLogin from './useLogin';

const Login = () => {
  const {appName} = useLogin();
  return (
    <View style={styles.container}>
      <Text>{appName}</Text>
    </View>
  );
};

export default Login;
