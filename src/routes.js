import { StackNavigator } from 'react-navigation';
import Main from './pages/main';
import Album from './pages/album';
import Search from './pages/search';
import { colors } from './styles';


const Routes = StackNavigator({
  Main: {
    screen: Main
  },
  Album: {
    screen: Album
  },
  Search: {
    screen: Search
  },
}, {
    navigationOptions: {
      headerStyle: {
        backgroundColor: colors.secundary,
        borderBottomWidth: 0,
      },
      headerTintColor: colors.white,
      headerBackTitle: null,
    },
  });

export default Routes;
