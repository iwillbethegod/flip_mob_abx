import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ChatMessage({message}) {
  const isUser = message.sender !== 'user';

  return (
    <View style={{flex: 1}}>
      <View
        style={
          isUser
            ? styles.mmessageWrapper
            : [styles.mmessageWrapper, {alignItems: 'flex-end'}]
        }>
        <View style={styles.mmessage}>
          <Text>{message.text}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mmessageWrapper: {
    width: '100%',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  mmessage: {
    maxWidth: '80%',
    backgroundColor: '#e6e6ff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 2,
  },
});
