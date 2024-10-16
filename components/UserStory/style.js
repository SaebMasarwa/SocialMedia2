import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {
  horizontalScale,
  scaleFontsize,
  verticalScale,
} from '../../assets/styles/scaling';
import {version} from 'react';
const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
  },
  firstName: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontsize(14),
    color: '#022150',
    marginTop: verticalScale(8),
    textAlign: 'center',
  },
});

export default style;
