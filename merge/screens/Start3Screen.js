import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <Text>Start3 screen test</Text>
            <Button
                buttonStyle={styles.iconButton}
                title={"Finish"}
                onPress={() => {
                    params.setShowNav(true);
                    navigation.navigate("Home Screen")
                }}
            />
            <Button
                buttonStyle={styles.iconButton}
                title={"Back"}
                onPress={() => navigation.navigate("Start2 Screen")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});