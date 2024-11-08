import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';



export default function HomeScreen({route, navigation}) {
  const Card = ({title, onPress}) => {
      return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Text style={styles.cardText}>{title}</Text>
        </TouchableOpacity>
      );
    };

    const [cards] = useState([
      {title: 'Warehouse 1'},
      {title: 'Warehouse 2'},
      {title: 'Warehouse 3'},
      {title: 'Warehouse 4'},
      {title: 'Warehouse 5'},
      {title: 'Warehouse 6'},
    ]);

    const numColumns = 2;

    const handleOnPress = () => {
        navigation.navigate("Chat")
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={cards}
          numColumns={numColumns}
          renderItem={({item}) => (
            <Card
              title={item.title}
              onPress={() => handleOnPress()}
            />
          )}
          keyExtractor={item => item.title}
          contentContainerStyle={styles.flatListContentContainer}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    flatListContentContainer: {
      paddingBottom: 16,
    },
    card: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
      padding: 16,
      margin: 8,
      elevation: 2, // For Android shadow
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
    cardText: {
      fontSize: 16,
      textAlign: 'center',
    },
  });
