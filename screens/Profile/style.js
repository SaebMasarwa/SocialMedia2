import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontsize,
  verticalScale,
} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/helper';
import {getFingerprint} from 'react-native-device-info';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(110),
    height: horizontalScale(110),
  },
  profileImageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(36),
  },
  profileImageContent: {
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(20),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsize(20),
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontsize(20),
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: scaleFontsize(16),
    color: '#79869F',
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
