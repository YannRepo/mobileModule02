import * as React from 'react';
import { View } from 'react-native';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import ResearchLocationArea from './component/ResearchLocationArea';
import MySearchBar from './component/MySearchBar';
import MyTabView from './component/MyTabView';



import { locationData } from './types'; 

export default function App() {
  return (
    <SafeAreaProvider>
      <TabViewExample />
    </SafeAreaProvider>
  );
}




export function TabViewExample() {
  const insets = useSafeAreaInsets();
  const [location, setLocation] = useState<locationData | null>(null);

  const [position, setPosition] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [GPSlocation, setGPSLocation] = useState(null);



  return (
    <View style={{ flex: 1, flexDirection: 'column', paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <StatusBar style='auto' />
      <ResearchLocationArea
      setSearchQuery={setSearchQuery}
      setLocation={setLocation}
      />
      <MyTabView location={location} />
    </View>
  );
}

