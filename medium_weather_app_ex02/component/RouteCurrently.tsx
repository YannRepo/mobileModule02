import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { WeatherContext } from '../context/WeatherContext';

export default function RouteCurrently() {
    const weatherContext = useContext(WeatherContext);
    if (!weatherContext) {
        throw new Error("WeatherContext not found");
    }
    const { data } = weatherContext;

    return (
        <View style={styles.tabBackground}>
            <View>
                {data?.error ? (
                    <Text style={styles.error}>{data.error}</Text>
                ) : (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.weatherInfoText}>{data?.location?.city ?? ''}</Text>
                        <Text style={styles.weatherInfoText}>{data?.location?.region ?? ''}</Text>
                        <Text style={styles.weatherInfoText}>{data?.location?.country ?? ''}</Text>
                        <Text style={styles.weatherInfoText}>{data?.current?.temperature ?? ''} °C</Text>
                        <Text style={styles.weatherInfoText}>{data?.current?.wind ?? ''} km/h</Text>
                    </View>
                )}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    tabText: {
        color: '#000000ff',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    tabBackground: {
        flex: 1,
        backgroundColor: '#ffffffff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    weatherInfoText: {
        fontSize: 20,
        alignItems: 'center'

    },
    error: {
        flex: 1,
        fontSize: 10,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'red',
    },
});