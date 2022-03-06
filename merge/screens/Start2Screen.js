import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>What style of gamer are you?</Text>
                    <View style={{ background: "gray", height: 100 }} />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>What genres do you like to play?</Text>
                    <View style={{ background: "gray", height: 100 }} />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Add your games</Text>
                    <View style={{ background: "gray", height: 100 }} />
                </View>
            </View>
            <View style={styles.bottomBar}>
                <Button
                    buttonStyle={styles.iconButton}
                    title={"Back"}
                    onPress={() => navigation.navigate("Start1 Screen")}
                />
                <Button
                    buttonStyle={styles.iconButton}
                    title={"Next"}
                    onPress={() => navigation.navigate("Start3 Screen")}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    formRow: {
        marginTop: 20
    },
    formRowText: {
        marginBottom: 10,
        marginTop: 20
    },
    formWrapper: {
        flexGrow: 1
    },
});