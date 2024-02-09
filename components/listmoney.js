import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ListMoney() {
    return (
        <ScrollView style={styles.container}>
            <View style={{ flex: 1, gap: 5 }}>
                <TouchableOpacity style={{ flex: 1, gap: 10 }}>
                    <Text>{new Date().toLocaleString("default", { weekday: "long", day: "2-digit" })}</Text>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, gap: 10 }}>
                    <Text>{new Date().toLocaleString("default", { weekday: "long", day: "2-digit" })}</Text>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>asdsad</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </ScrollView>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(210,230,245)",
        padding: 20,
        gap: 30,

    },
    box: {
        padding: 15,
        backgroundColor: "white",
        borderRadius: 14
    },
});