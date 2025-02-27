import React, {Component, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import CategoryItem from '../components/widgets/CategoryItem';
import {getCategories} from '../store/actions/movieActions';

const Categories = () => {
  const {categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View>
      <FlatList
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem item={item} />}
      />
    </View>
  );
};

export default Categories;
