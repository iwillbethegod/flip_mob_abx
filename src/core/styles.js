import {Dimensions, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
export default StyleSheet.create({
  container: {
    flex: 1,
    padding: wp('3%'),
    backgroundColor: '#FFFFFF',
  },

  headerDivider: {
    backgroundColor: '#204D9B',
    height: 2,
    width: '100%',
  },

  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    width: '80%',
    justifyContent: 'center',
    // height: hp('6%'),
    height: 'auto',
    borderRadius: 10,
    backgroundColor: '#2F3251',
  },

  label: {
    color: '#777272',
    fontSize: hp('1.6%'), //13
  },

  titleTextBold: {
    fontWeight: 'bold',
    color: '#000000',
    fontSize: hp('2.1%'), //18
  },

  largeText: {
    color: '#000000',
    fontSize: hp('1.85%'), //16
  },

  mediumText: {
    color: '#000000',
    fontSize: hp('1.7%'), //14
  },

  inputView: {
    width: '90%',
    height: hp('6%'),
    alignItems: 'flex-start',
  },

  textInput: {
    width: '80%',
    height: hp('6%'),
    padding: 0,
    color: '#777272',
    fontSize: hp('1.6%'),
    borderBottomColor: '#777272',
    borderBottomWidth: 1,
  },

  dashboardEmptyDataContainer: {
    height: hp('40%'),
    width: wp('90%'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  dashboardEmptyText: {
    textAlign: 'center',
    fontSize: hp('2%'),
    fontWeight: 'bold',
    color: '#808080',
  },
});
