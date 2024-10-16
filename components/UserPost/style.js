import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/helper';
import {
  horizontalScale,
  scaleFontsize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  username: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'), //this font weight should have been a string
    fontSize: scaleFontsize(16),
  },
  location: {
    color: '#79869F',
    fontFamily: getFontFamily('Inter', '400'), //this font weight should have been a string
    fontSize: scaleFontsize(12),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    width: '100%',
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {marginLeft: horizontalScale(10), flexDirection: 'row'},
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatButtonText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
