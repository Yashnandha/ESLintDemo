import {useState} from 'react';

const useLogin = () => {
  const [appName, setAppName] = useState<string>('');
  return {appName, setAppName};
};

export default useLogin;
