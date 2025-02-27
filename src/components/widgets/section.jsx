import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

const Section = ({item}) => {
  const {topRatedMovies, populerMovies, nowPlaying} = useSelector(
    state => state.movies,
  );
  const setData = () => {
    switch (item.id) {
      case 1:
        return topRatedMovies;
      case 2:
        return populerMovies;
      case 3:
        return nowPlaying;
      default:
        return topRatedMovies;
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default Section;
