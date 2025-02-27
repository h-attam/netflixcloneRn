import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {height} from '../../utils/constants';

const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.input} {...props} />
      {error && (
        <Text style={{marginTop: 5, color: ThemeColors.RED}}>{error}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: ThemeColors.GRAY,
    height: height * 0.1,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 16,
    color: ThemeColors.WHITE,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,

    fontSize: 25,
    borderRadius: 5,
    paddingVertical: 15,

    color: ThemeColors.WHITE,
  },
});

export default Input;
