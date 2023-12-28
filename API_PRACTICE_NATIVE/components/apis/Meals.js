import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { getData } from '../../hooks/getData';

export const Meals = () => {
  const { data } = getData();
  
  return (
    <View style={styles.container}>
      <FlatList
        data={data.meals} 
        keyExtractor={(item) => item.idMeal} 
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.img} source={{uri: item.strMealThumb}}/>
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
