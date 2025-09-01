import { StyleSheet } from 'react-native';
import RouteCurrently from '../RouteCurrently';

export const styles = StyleSheet.create({
    // RouteCurrently
    // Route Today
    locationInfoText: { fontSize: 16, textAlign: 'center'},
    row: { flexDirection: 'row', paddingVertical: 3, justifyContent: 'space-between' },
    tabText: { color: '#000000ff', fontSize: 30, fontWeight: 'bold', textAlign: 'center' },
    tabBackground: { flex: 1, backgroundColor: '#ffffffff', justifyContent: 'center', alignItems: 'center' },
    weatherInfoText: { fontSize: 12},
    error: { flex: 1, fontSize: 10, justifyContent: 'center', alignItems: 'center', color: 'red' },

    // Route Weekly

});