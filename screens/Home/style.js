import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {
  horizontalScale,
  scaleFontsize,
  verticalScale,
} from '../../assets/styles/scaling';

const globalStyle = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messgaeIcon: {
    padding: horizontalScale(14),
    borderRadius: horizontalScale(100),
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    borderRadius: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    position: 'absolute',
    right: horizontalScale(-5),
    top: verticalScale(-3),
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: scaleFontsize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(28),
  },
  userPostContainer: {
    flexDirection: 'row',
    marginHorizontal: horizontalScale(24),
  },
});

export default globalStyle;
