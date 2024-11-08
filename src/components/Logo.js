import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function Logo({style}) {
  return (
    <Image
      source={require('../images/logo.png')}
      style={[styles.image, style]}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: hp('15%'),
    height: hp('15%'),
    resizeMode: 'contain',
  },
});
