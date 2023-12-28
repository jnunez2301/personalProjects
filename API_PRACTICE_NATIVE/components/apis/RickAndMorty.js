import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { getData } from '../../hooks/getData';
import { useLayoutEffect } from 'react';

export const RickAndMorty = () => {
  const { data } = getData();
  
  return (
    <View style={styles.container}>
      <FlatList
        data={[data]} 
        keyExtractor={(item) => item.created} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Image style={styles.img} source={{uri: item.image}}/>
          </View>
        )}
      />
    </View>
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
    width: 150,
  },
  img: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 5,
  },
});
