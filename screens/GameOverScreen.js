import { Image, ScrollView, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";

function GameOverScreen({
    roundsNumber, userNumber, onStartNewGame
}) {

    const { width, height } = useWindowDimensions();
    let imageSize = 300;

    if (width < 380) {
        imageSize = 150;
    }
    if (width > 380) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2,
    };

    return (
        <ScrollView style={styles.screen}>
            <View style={styles.rootContainer}>
                <Title>Game Over!</Title>
                <View style={[ styles.imageContainer, imageStyle ]}>
                    <Image 
                        source={require('../assets/images/success.png')} 
                        style={styles.image} 
                    />
                </View>
                <Text style={styles.summaryText}>
                    Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to 
                    guess the number <Text style={styles.highlight}>{userNumber}</Text>.
                </Text>
                <PrimaryButton pressHandler={onStartNewGame}>Start New Game</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        // width: width < 380 ? 150 : 300,
        // height: width < 380 ? 150 : 300,
        // borderRadius: width < 380 ? 75 : 150,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: 100 + '%',
        height: 100 + '%',
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'white',
        overflow: 'hidden',
    },

})