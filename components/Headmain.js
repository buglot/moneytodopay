
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export default function Headmain() {
    const moneyday = 120;
    const moneymonth = 8500;
    const month = new Date().toLocaleString('default', { month: 'long' })
    const days = new Date().toLocaleString('default', { day: "numeric", weekday: "long" })
    return (

        <TouchableOpacity style={styles.container}>
            <View style={styles.boxContainer}>
                <Text style={styles.fontHeaddaytitle}> on {days} you paid monney</Text>
                <Text style={styles.fontHeadday}>{moneyday}</Text>
            </View>
            <View style={styles.boxContainer2}>
                <Text style={styles.fontHeadmonthtitle}>You paid money on {month}</Text>
                <Text style={styles.fontHeadmonth}>{moneymonth}</Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        borderBottomColor: "black",
        justifyContent: "center",
        alignItems: "center",
        gap: 30,      
    },
    boxContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 40
    },
    boxContainer2: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    fontHeadday: {
        fontSize: 80,
        color: "white",
        fontWeight: "600",
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 30,
        width: "100%",
        textAlign: "center",

    },
    fontHeaddaytitle: {
        fontSize: 20,
        color: "rgba(255,255,255,0.7)",
        fontWeight: "600",
    },
    fontHeadmonth: {
        fontSize: 30,
        color: "rgba(255,255,255,0.8)",
        fontWeight: "600",

    },
    fontHeadmonthtitle: {

        color: "rgba(230,230,230,0.8)",
        fontWeight: "600",
    }
});
