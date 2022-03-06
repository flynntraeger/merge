import { Text, View, StyleSheet, Image} from 'react-native';

export default function AvatarSection({ text }) {
    return (
        <View style={styles.AvatarSection}>
            <Text>{text}</Text>
            <Image
                style={{width: "50%"}}
                source={require("./mergebot.png")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    AvatarSection: {
        display: "flex"
    }
});