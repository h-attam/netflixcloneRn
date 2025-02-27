import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../screens/getStarted';
import WatchList from '../screens/watchList';
import {
  ADDNEWLIST,
  GETSTARTED,
  MOVIEDETAIL,
  SIGNIN,
  TAB,
  WATCHLIST,
} from '../utils/routes';
import SignIn from '../screens/signIn/signIn';
import {ThemeColors} from '../theme/themeColors';
import {Edit2} from 'iconsax-react-native';
import AddNewList from '../screens/watchList/addNewList';
import TabNavigation from './tabNavigation';
import MovieDetail from '../screens/movies/movieDetail';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerTintColor: ThemeColors.WHITE,
        headerStyle: {
          backgroundColor: ThemeColors.BLACK,
        },
      })}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={GETSTARTED}
        component={GetStarted}
      />
      <Stack.Screen name={SIGNIN} component={SignIn} />
      <Stack.Screen
        options={({navigation}) => ({
          headerRight: () => (
            <Edit2
              onPress={() => navigation.navigate(ADDNEWLIST)}
              size="28"
              color={ThemeColors.WHITE}
            />
          ),
        })}
        name={WATCHLIST}
        component={WatchList}
      />
      <Stack.Screen name={ADDNEWLIST} component={AddNewList} />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TAB}
        component={TabNavigation}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={MOVIEDETAIL}
        component={MovieDetail}
      />
    </Stack.Navigator>
  );
};

export default RootNavigation;
