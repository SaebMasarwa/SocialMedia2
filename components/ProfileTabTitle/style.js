import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {horizontalScale, scaleFontsize} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  title: {
    color: '#022150',
    fontFamily: getFontFamily('Inter', 500),
    fontSize: scaleFontsize(16),
    padding: horizontalScale(15),
  },
  titleNotFocused: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'),
  },
});

export default style;
