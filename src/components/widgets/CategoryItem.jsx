import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: ThemeColors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CategoryItem;
