import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useSelector} from 'react-redux';
import RootLayout from '../components/RootLayout';
import commonstyles from '../core/styles';
import {useNavigation} from '@react-navigation/native';


export default function SplashScreen({ navigation }){
  const login = useSelector(state => state.login);
  const isLoggedIn = login.isLoggedIn !== null && login.isLoggedIn === true;


  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 3000);
  }, [navigation]);

  const checkLogin = async () => {
    
  };

  return (
    <RootLayout>
      <View
        style={[
          commonstyles.container,
          {alignItems: 'center', justifyContent: 'center'},
        ]}>
        <Image source={require('../images/logo.png')} style={styles.image} />
        <Text style={styles.appTitle}>FLIP</Text>
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  image: {
    width: hp('25%'),
    height: hp('25%'),
    resizeMode: 'contain',
  },
  appTitle: {
    fontSize: hp('3%'),
    color: '#052b5a',
    fontWeight: 'bold',
  },
});
