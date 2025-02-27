import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getNowPlaying,
  getPopulerMovies,
  getTopRatedMovies,
} from '../../store/actions/movieActions';
import CategoryItem from '../../components/widgets/CategoryItem';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/sections';

const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopulerMovies());
    dispatch(getNowPlaying());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

export default Home;
