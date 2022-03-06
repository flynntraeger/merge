import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { SearchBar } from 'react-native-elements';

export default function Start1Screen({ route, navigation }) {
    const params = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.formWrapper}>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>When are you free to game?</Text>
                    <View style={{ background: "gray", height: 100 }} />
                </View>
                <View style={styles.formRow}>
                    <Text style={styles.formRowText}>Add your friends</Text>
                    <SearchBar
                        containerStyle={styles.searchBarContainer}
                        inputContainerStyle={styles.searchBarTextArea}
                        placeholder="Search by username..."
                        inputStyle={styles.searchBarText}
                        searchIcon={{ color: "#888888" }}
                        clearIcon={{ color: "#888888" }}
                        placeholderTextColor={"#888888"}
                        selectionColor='#888888'
                    />
                </View>
            </View>
            <View style={styles.bottomBar}>
                <Button
                    buttonStyle={styles.iconButton}
                    title={"Back"}
                    onPress={() => navigation.navigate("Start2 Screen")}
                />
                <Button
                    buttonStyle={styles.iconButton}
                    title={"Finish"}
                    onPress={() => {
                        params.setShowNav(true);
                        navigation.navigate("Home Screen");
                    }}
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