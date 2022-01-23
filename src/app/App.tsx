import React from 'react';
import type { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigationStack from 'navigation';

const App: () => ReactNode = () => (
  <NavigationContainer fallback={<ActivityIndicator />}>
    <RootNavigationStack />
  </NavigationContainer>
);

export default App;
