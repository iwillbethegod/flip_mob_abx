import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Keyboard, TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import ChatMessage from '../components/ChatMessage';
import {sendMessageApi} from '../network/ApiImplementation';

export default function ChatScreen({route, navigation}) {
  const flatListRef = useRef(null);

  const [messageList, setMessageList] = useState([]);
  const [newMessageText, setNewMessageText] = useState('');
  const [isDisabled, setDisabled] = useState(false);

  useEffect(() => {
    //Reset the chat
    setNewMessageText('');
    setMessageList([]);
  }, []);

  const addMessage = async () => {
    if (newMessageText.trim() === '') {
      return; // Prevent adding empty messages
    }

    //Disable the send button
    setDisabled(true);
    // //Add user message
    const newMessage = {sender: 'user', text: newMessageText.trim()};
    const loadingMessage = {sender: 'system', text: 'Loading...'};
    setMessageList(prevMessages => [
      ...prevMessages,
      newMessage,
      loadingMessage,
    ]);
    setNewMessageText('');
    //close the keyboard
    Keyboard.dismiss();
    //Move to end of the list
    // if (messageList.length !== 0 && flatListRef.current) {
    //   flatListRef?.current.scrollToEnd({animated: true});
    // }
    const {data, error} = await sendMessageApi(newMessageText);
    if (data) {
      //Add LLM response message
      setMessageList(prevMessages => {
        const newData = [...prevMessages];
        if (newData.length > 0) {
          newData.pop(); // Remove the last item
          const answer = {sender: 'system', text: data.response};
          newData.push(answer); // Add the new item
        }
        return newData;
      });
    }
    if (error) {
      console.log(error);
    }
    //Enable the send button
    setDisabled(false);
    //Move to end of the list
    // if (messageList.length !== 0 && flatListRef.current) {
    //   flatListRef?.current?.scrollToEnd({animated: true});
    // }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#FFFFFF',
      }}>
      <View style={{flex: 1}}>
        <FlatList
          ref={flatListRef}
          style={{flex: 1, padding: 10}}
          data={messageList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => {
            return <ChatMessage message={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TextInput
          style={{
            flex: 1,
            height: 50,
            borderRadius: 30,
            backgroundColor: '#f2f2f2',
            padding: 10,
            borderBottomWidth: 0,
          }}
          placeholder="Ask your question"
          value={newMessageText}
          onChangeText={text => {
            setNewMessageText(text);
          }}
        />
        <Button
          labelStyle={{fontWeight: '700', color: 'white'}}
          onPress={addMessage}
          disabled={isDisabled}
          contentStyle={{
            backgroundColor: isDisabled === true ? '#d9d9d9' : '#2F3251',
            borderColor: 'transparent',
            borderWidth: 0,
            borderRadius: 30,
          }}
          style={{
            width: 'auto',
            marginLeft: 10,
          }}>
          Send
        </Button>
      </View>
    </View>
  );
}
