import { Dimensions, StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const { width, height } = Dimensions.get('window');

function Card({ children }) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height < 380 ? 18 : 36,
        marginHorizontal: width < 380 ? 12 : 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
    },
});