import React from 'react';
import {StyleSheet} from 'react-native';
import {Appbar} from 'react-native-paper';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export default function CustomAppBar({title, navigation}) {
  return (
    <Appbar.Header style={styles.container}>
      <Appbar.Action
        icon="chevron-left"
        size={wp('6%')}
        onPress={() => navigation.goBack()}
      />
      <Appbar.Content
        titleStyle={styles.title}
        style={styles.titleContainer}
        mode="small"
        title={title}
      />
      <Appbar.Action />
    </Appbar.Header>
  );
}
const styles = StyleSheet.create({
  container: {
    elevation: 10,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: hp('2.1%'), //18
    fontWeight: 'bold',
    color: '#2F3251',
  },
});
