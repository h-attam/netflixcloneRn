import React, {useEffect} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Image,
  Text,
} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {getMovieData} from '../../store/actions/movieActions';
import {ThemeColors} from '../../theme/themeColors';
import {IMAGE_BASE_URL} from '../../service/uri';
import {height, width} from '../../utils/constants';

const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  const {pendingDetailData, movieDetailData} = useSelector(
    state => state.movies,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getMovieData({
        movieId: movieId,
      }),
    );
  }, []);

  return (
    <View style={defaultScreenStyle.detailScreen}>
      {' '}
      {pendingDetailData ? (
        <View style={styles.container}>
          <ActivityIndicator color={ThemeColors.GRAY} size={'large'} />
        </View>
      ) : (
        <ScrollView>
          <Image
            source={{uri: IMAGE_BASE_URL + movieDetailData?.poster_path}}
            style={{
              width: width,
              height: height * 0.6,
              resizeMode: 'cover',
            }}
          />
          <View
            style={{
              position: 'absolute',
              width: 60,
              height: 60,
              borderRadius: 100,
              right: 20,
              top: 60,
              backgroundColor: ThemeColors.COLOR4,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: ThemeColors.BLACK,
                fontSize: 20,
                fontWeight: 'bold',
              }}>
              {movieDetailData.vote_average}
            </Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>{movieDetailData.original_title}</Text>
            <Text style={styles.description}>{movieDetailData.tagline}</Text>

            <Text style={styles.description}>{movieDetailData.overview}</Text>
            <Text style={styles.section}>Language</Text>
            {movieDetailData.spoken_languages?.map((item, index) => (
              <Text style={styles.title} key={index}>
                {item.name}
              </Text>
            ))}

            <Text style={styles.section}>Production Countries</Text>
            {movieDetailData.production_countries?.map((item, index) => (
              <Text style={styles.title} key={index}>
                {item.name}
              </Text>
            ))}
            <Text style={styles.section}>Genres</Text>
            {movieDetailData.genres?.map((item, index) => (
              <Text style={styles.title} key={index}>
                {item.name}
              </Text>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: ThemeColors.WHITE,
  },

  infoContainer: {
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 50,
  },
  description: {
    fontSize: 16,
    color: ThemeColors.WHITE,
    marginTop: 10,
  },
  section: {
    color: ThemeColors.RED,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginBottom: 20,
  },
});

export default MovieDetail;
