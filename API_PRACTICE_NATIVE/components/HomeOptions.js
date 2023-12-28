import React from 'react';
import { View, Text, ScrollView, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import the necessary hook

export const HomeOptions = () => {
  const navigation = useNavigation();  // Initialize the navigation hook

  const handleCardPress = (baseURL, api) => {
    navigation.navigate(api, {baseURL: baseURL});
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardPress('https://rickandmortyapi.com/api/character/1', 'Rick')}>
          <Text style={styles.title}>Rick and Morty API</Text>
          <Image
            style={styles.img}
            source={{ uri: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg' }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardPress('https://www.themealdb.com/api/json/v1/1/random.php', 'Meals')}>
          <Text style={styles.title}>Meals API</Text>
          <Image
            style={styles.img}
            source={{ uri: 'https://geekflare.com/wp-content/uploads/2022/03/food-API.jpg'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          onPress={() => handleCardPress('https://api.waifu.pics/sfw/waifu', 'Anime')}>
          <Text style={styles.title}>Anime API</Text>
          <Image
            style={styles.img}
            source={{ uri: 'https://publicapis.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdev-resources%2Fimage%2Fupload%2Fresources%2Fscreenshots%2F67f5ceb1-01f8-4475-a0ce-f14ec25dc341.png&w=1080&q=75' }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: 'plum',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 16,
    borderRadius: 5,
    textAlign: 'center',
    width: 150
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5
  },
});
