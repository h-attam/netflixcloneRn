import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {sections} from '../utils/constants';
import Section from '../components/widgets/section';

const Sections = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        renderItem={({item}) => <Section item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Sections;
