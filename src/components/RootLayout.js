import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function RootLayout({children}) {
  return (
    <SafeAreaView style={{flex: 1}} edges={['bottom', 'left', 'right']}>
      <ScrollView contentContainerStyle={{flex: 1}}>{children}</ScrollView>
    </SafeAreaView>
  );
}
