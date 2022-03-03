import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <Text>Start1 screen test</Text>
            <TextInput
                placeholder='Choose a username'
                onChangeText={text => params.setUsername(text)}
                style={styles.TextInput}
            />
            <Button
                title={"Next"}
                buttonStyle={styles.iconButton}
                onPress={() => { navigation.navigate("Start2 Screen") }}
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
    TextInput: {
        backgroundColor: 'white',
        margin: '10px',
        padding: '2px',
        textAlign: 'center'
    }
});