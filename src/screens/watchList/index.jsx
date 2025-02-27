import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WhatchListItem from '../../components/whatchList/whatcListItem';
import {ThemeColors} from '../../theme/themeColors';
import {height} from '../../utils/constants';

const WatchList = () => {
  const {whatchList} = useSelector(state => state.whatchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        ListHeaderComponent={
          <Text
            style={{
              color: ThemeColors.WHITE,
              fontSize: 24,
              textAlign: 'center',
              marginVertical: height * 0.05,
            }}>
            Who's Watching?
          </Text>
        }
        numColumns={2}
        data={whatchList}
        renderItem={({item, index}) => (
          <WhatchListItem item={item} index={index} />
        )}
      />
    </View>
  );
};

export default WatchList;
