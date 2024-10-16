import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {scaleFontsize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsize(24),
  },
});

export default style;
