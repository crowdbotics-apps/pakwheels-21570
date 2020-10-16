import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps145083Navigator from '../features/Maps145083/navigator';
import Add-Item145082Navigator from '../features/Add-Item145082/navigator';
import Maps145078Navigator from '../features/Maps145078/navigator';
import UserProfile145074Navigator from '../features/UserProfile145074/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
