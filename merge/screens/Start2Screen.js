import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <Text>Start2 screen test</Text>
            <Button
                buttonStyle={styles.iconButton}
                title={"Next"}
                onPress={() => navigation.navigate("Start3 Screen")}
            />
            <Button
                buttonStyle={styles.iconButton}
                title={"Back"}
                onPress={() => navigation.navigate("Start1 Screen")}
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