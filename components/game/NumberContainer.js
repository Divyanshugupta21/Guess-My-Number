import { View, Text, StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const { width, height } = Dimensions.get('window');

function NumberContainer({ children }) {
    return (
    <View style={styles.container}>
        <Text style={styles.numberText}>{children}</Text>
    </View>
    );
}

export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: width < 380 ? 12 : 24,
        margin: width < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
    },
    numberText: {
        color: Colors.accent500,
        fontSize: width < 380 ? 28 : 36,
        fontFamily: 'open-sans-bold',
        textAlign: 'center',
    }
});