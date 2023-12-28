import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, RefreshControl } from 'react-native';
import { getData } from '../../hooks/getData';

export const AnimeApi = () => {
  const [refreshing, setRefreshing] = useState(false);
  const { data } = getData();

  const onRefresh = () => {
    setRefreshing(true)
    
    if([data].length > 0){
      setRefreshing(false);
    }
    
  };
  
  return (
    <View style={styles.container}>
      <FlatList
        data={[data]}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
         
          <View style={styles.card}>
            <Image style={styles.img} source={{ uri: item.url }} />
          </View>

        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
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
