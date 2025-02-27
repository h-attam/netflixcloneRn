import axios from 'axios';

import {API_KEY, token} from '../utils/constants';
import {BASE_URL} from './uri';

const Client = axios.create();
Client.defaults.baseURL = BASE_URL;
Client.defaults.params = {
  api_key: API_KEY,
  language: 'en-EN',
};

Client.defaults.headers = {
  accept: 'application/json',
  'Content-Type': 'application/json',
  Authorization: `Bearer ${token}`,
};

export default Client;
