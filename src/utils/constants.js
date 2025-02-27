import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const API_KEY = '';
const token = '';

const sections = [
  {
    id: 1,
    title: 'Top Rated',
  },
  {
    id: 2,
    title: 'Popular ',
  },
  {
    id: 3,
    title: 'Upcoming ',
  },
  {
    id: 4,
    title: 'Selected for You Today',
  },
  {
    id: 5,
    title: 'My List',
  },
  {
    id: 6,
    title: 'Ensemble TV Shows',
  },
];

export {width, height, API_KEY, token, sections};
