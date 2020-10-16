import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import SignIn53145191Navigator from '../features/SignIn53145191/navigator';
import Maps145132Navigator from '../features/Maps145132/navigator';
import Add-Item145131Navigator from '../features/Add-Item145131/navigator';
import Maps145127Navigator from '../features/Maps145127/navigator';
import UserProfile145123Navigator from '../features/UserProfile145123/navigator';
import Maps145083Navigator from '../features/Maps145083/navigator';
import Add-Item145082Navigator from '../features/Add-Item145082/navigator';
import Maps145078Navigator from '../features/Maps145078/navigator';
import UserProfile145074Navigator from '../features/UserProfile145074/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
SignIn53145191: { screen: SignIn53145191Navigator },
Maps145132: { screen: Maps145132Navigator },
Add-Item145131: { screen: Add-Item145131Navigator },
Maps145127: { screen: Maps145127Navigator },
UserProfile145123: { screen: UserProfile145123Navigator },
Maps145083: { screen: Maps145083Navigator },
Add-Item145082: { screen: Add-Item145082Navigator },
Maps145078: { screen: Maps145078Navigator },
UserProfile145074: { screen: UserProfile145074Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
