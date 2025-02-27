import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import themeColors, {ThemeColors} from '../../theme/themeColors';
import {height} from '../../utils/constants';

const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'primary':
        return ThemeColors.RED;
      case 'warning':
        return ThemeColors.WHITE;
      case 'info':
        return ThemeColors.BLACK;

      default:
        return ThemeColors.RED;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColors.WHITE,
  },
});

export default Button;
