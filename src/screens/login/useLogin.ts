import {useState} from 'react';

const useLogin = () => {
  const [appName, setappName] = useState<string>('');
  return {appName, setappName};
};

export default useLogin;
