import {StyleSheet} from 'react-native';
import colors from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    backgroundColor: colors.tintGray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '16:9',
    height: 200,
  },
});
export default styles;
