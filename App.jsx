//import liraries
import {NavigationContainer} from '@react-navigation/native';

import RootNavigation from './src/router/rootnavigation';
import {Provider} from 'react-redux';
import store from './src/store';

// create a component
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
