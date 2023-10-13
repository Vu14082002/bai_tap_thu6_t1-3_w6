import { StyleSheet, Text, View } from "react-native";
import { Layout01 } from "./src/View/Layout01";
import { Layout02 } from "./src/View/Layout02";

export default function App() {
    return (
        <View style={styles.container}>
            <Layout02 />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
