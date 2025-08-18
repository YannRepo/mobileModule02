import * as React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import MySearchBar from './component/MySearchBar';
import MyTabView from './component/MyTabView';

export default function App() {
  return (
    <SafeAreaProvider>
      <TabViewExample />
    </SafeAreaProvider>
  );
}



export function TabViewExample() {
  const insets = useSafeAreaInsets();
  const [position, setPosition] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [GPSlocation, setGPSLocation] = useState(null);
  const [errorPermissionMessage, SetErrorPermissionMessage] = useState(null);



  return (
    <View style={{ flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar style='auto' />
      <MySearchBar
        setSearchQuery={setSearchQuery}
        setPosition={setPosition}
        SetErrorPermissionMessage={SetErrorPermissionMessage}
      />
      <MyTabView position={position} />
    </View>
  );
}

