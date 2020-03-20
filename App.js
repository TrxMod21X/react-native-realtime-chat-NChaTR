/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import Icon from 'react-native-vector-icons/dist/EvilIcons'
import { Root, Icon } from 'native-base';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import { defaultNavigationOptions } from './src/config/navigation';
import { color } from './src/config/color';

import Chat from './src/screens/chat/index'
import ChatRoom from './src/screens/chat/Room'

import Friends from './src/screens/friends/index'
import SearchFriends from './src/screens/friends/Search'
import FriendsLocation from './src/screens/friends/Location'
import FriendsProfile from './src/screens/friends/Profile'

import Account from './src/screens/account';
import ChangePassword from './src/screens/account/Password';
import ChangeEmail from './src/screens/account/Email';
import Profile from './src/screens/account/Profile';

import SplashScreen from './src/screens/wellcome/SplashScreen'

import Login from './src/screens/auth/Login';
import SignUp from './src/screens/auth/SignUp';

import AuthLoading from './src/screens/auth';

import { Provider } from './src/context/index';

const BottomTabNavigator = createBottomTabNavigator(
  {
    Friends,
    Chat,
    Account
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Friends':
            iconName = 'contacts'
            break
          case 'Chat':
            iconName = 'chatboxes'
            break
          case 'Account':
            iconName = 'contact'
            break
          default:
            iconName = 'logo-android'
        }
        return (
          <Icon
            active={focused}
            name={iconName}
            style={{
              fontSize: 25, 
              color: tintColor
            }}/>
        )
      }
    }),
    tabBarOptions: {
      activeTintColor: color.col5,
      inactiveTintColor: color.regularGray
    },
    initialRouteName: 'Chat',
    navigationOptions: {headerShown: false}
  }
)

const Auth = createStackNavigator({
  Login,
  SignUp,
});

const Main = createStackNavigator(
  {
    BottomTabNavigator,
    ChatRoom,
    SearchFriends,
    FriendsLocation,
    FriendsProfile,
    ChangePassword,
    ChangeEmail,
    Profile,
  },
  {defaultNavigationOptions}
)

const AppContainer = createAppContainer(
  createSwitchNavigator({
    SplashScreen,
    AuthLoading,
    Auth,
    Main
  })
)

const App = () => {
  return (
    <Provider>
      <Root>
        <AppContainer />
      </Root>
    </Provider>
  )
}

export default App



