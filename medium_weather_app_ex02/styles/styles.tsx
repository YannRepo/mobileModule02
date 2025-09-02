import { StyleSheet } from 'react-native';
import RouteCurrently from '../RouteCurrently';

export const styles = StyleSheet.create({
    // RouteCurrently
    // Route Today
    locationInfoText: { fontSize: 16, textAlign: 'center'},
    row: { flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between' },
    tabText: { color: '#000000ff', fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
    tabBackground: { flex: 1, backgroundColor: '#ffffffff', justifyContent: 'center', alignItems: 'center' },
    weatherInfoText: { fontSize: 12, alignItems: 'center' , width: 80, textAlign: 'center'},
    error: { flex: 1, fontSize: 10, justifyContent: 'center', alignItems: 'center', color: 'red' },

    // Route Weekly
    weeklyLocationInfoText: { fontSize: 16, textAlign: 'center'},
    weeklyRow: { flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between' },
    weeklyTabText: { color: '#000000ff', fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
    weeklyTabBackground: { flex: 1, backgroundColor: '#ffffffff', justifyContent: 'center', alignItems: 'center' },
    weeklyWeatherInfoText: { fontSize: 12, justifyContent: 'center', alignItems: 'center' , width: 80, textAlign: 'center'},
    weeklyError: { flex: 1, fontSize: 10, justifyContent: 'center', alignItems: 'center', color: 'red' },


});