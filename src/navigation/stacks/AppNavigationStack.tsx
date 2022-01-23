import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LevelsListScreen from '@feature/learn/levels';
import { Route } from '../routes';

const AppStack = createNativeStackNavigator();

export const AppNavigationStack: FC = () => (
  <AppStack.Navigator
    initialRouteName={Route.LevelList}
    screenOptions={{ headerShown: false }}
  >
    <AppStack.Screen name={Route.LevelList} component={LevelsListScreen} />
  </AppStack.Navigator>
);

export default AppNavigationStack;
