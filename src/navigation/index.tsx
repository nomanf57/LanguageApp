import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppNavigationStack } from 'navigation/stacks/AppNavigationStack';
import { Stack } from './routes';

const RootStack = createNativeStackNavigator();

const RootNavigationStack: FC = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name={Stack.Main} component={AppNavigationStack} />
  </RootStack.Navigator>
);

export default RootNavigationStack;
