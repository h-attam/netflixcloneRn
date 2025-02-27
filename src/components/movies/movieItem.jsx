import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {IMAGE_BASE_URL, TOP_RATED_MOVIE_URL} from '../../service/uri';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item.poster_path}}
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 8,
          resizeMode: 'cover',
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

export default MovieItem;
