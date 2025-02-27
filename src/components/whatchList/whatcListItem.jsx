import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {Smileys} from 'iconsax-react-native';
import {getRandomColor} from '../../utils/functions';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST, TAB} from '../../utils/routes';

const WhatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container} onPress={() => navigation.replace(TAB)}>
      <View
        style={{
          width: width * 0.35,
          height: width * 0.35,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: ThemeColors.COLOR2,
        }}>
        <Image
          source={require('../../assets/images/smile.png')}
          style={{
            width: width * 0.25,
            height: width * 0.25,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',

    margin: 10,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

export default WhatchListItem;
