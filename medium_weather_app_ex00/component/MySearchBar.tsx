import { TextInput, View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useState, useEffect } from 'react';

import { Icon } from 'react-native-elements';
import * as Location from 'expo-location';

export default function MySearchBar({
  setSearchQuery,
  setPosition,
  SetErrorPermissionMessage,
}: {
  setSearchQuery: (query: string) => void;
  setPosition: (position: string) => void;
  SetErrorPermissionMessage: (message: string) => void;
}) {

  // Juste au demarrage
  useEffect(() => {
    handleGeolocation();
  }, []);

  const handleGeolocation = () => {
    //setPosition('Geolocation');
    getGPSPosition();
  };

  const getGPSPosition = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      SetErrorPermissionMessage('Permission to access location was denied');
      setPosition('errorLocation');
      return;
    }
    let loc = await Location.getCurrentPositionAsync({});
    const coordsString = `${loc.coords.latitude},${loc.coords.longitude}`;
    setPosition(coordsString); // coords contains latitude, longitude, altitude, etc.
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', ...styles.searchContainer }}>
      <View style={{ flex: 1 }}>
        <Searchbar
          placeholder="Search location..."
          onChangeText={text => {
            setPosition(text);
          }}
        />
      </View>
      <View style={{ marginLeft: 8 }}>
        <Icon
          name='near-me'
          size={32}
          onPress={() => {
            handleGeolocation();
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    backgroundColor: '#5B5D72',
    padding: 10,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ccc',
  },
});
