import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LibraryScreen } from './src/features/library/LibraryScreen';
import { ArticleScreen } from './src/features/article/ArticleScreen';
import type { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ contentStyle: { backgroundColor: '#fff' } }}>
          <Stack.Screen name="Library" component={LibraryScreen} options={{ title: 'Trail Notes' }} />
          <Stack.Screen name="Article" component={ArticleScreen} options={{ title: 'Материал' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
