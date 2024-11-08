import React from 'react';
import {Button} from 'react-native-paper';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import commonstyles from '../core/styles';

export default function CustomButton({
  text,
  mode = 'contained',
  textColor = '#FFFFFF',
  style,
  onPress,
  accessibilityLabel,
  disabled,
}) {
  return (
    <Button
      accessibilityLabel={accessibilityLabel}
      style={[
        commonstyles.button,
        disabled === true
          ? {backgroundColor: '#d9d9d9'}
          : mode === 'contained'
          ? {backgroundColor: '#2F3251'}
          : {backgroundColor: '#FFFFFF'},
        style,
      ]}
      disabled={disabled}
      mode={mode}
      labelStyle={{
        fontSize: hp('1.5%'),
        fontWeight: 'bold',
        textAlign: 'center',
      }}
      textColor={textColor}
      // contentStyle={{paddingVertical: wp('4%')}}
      onPress={onPress}>
      {text}
    </Button>
  );
}
