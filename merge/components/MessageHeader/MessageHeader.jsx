import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { Badge } from 'react-native-paper';
import { ChevronRight} from "react-native-feather";

class MessageHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.leftCol}>
                <Avatar 
                    size={50}
                    rounded
                    source={{uri: this.props.picURL}}
                />
                <Badge style={styles.badge}>
                    {this.props.value}
                </Badge>
            </View>
            <View style={styles.rightCol}>
                <View style={styles.topRow}>
                    <Text style={styles.nameText}>{this.props.username}</Text>
                    <View style={styles.timestampRow}>
                        <Text style={styles.timestampText}>{this.props.timestamp}</Text>
                        <Button 
                            icon={<ChevronRight stroke="#888888" width={15} height={15} />}
                            buttonStyle={styles.iconButton}
                        />
                    </View>
                </View>
                <Text style={styles.messageText}>{this.props.message}</Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "95%",
      borderRadius: 10,
      borderBottomWidth: 1,
      borderColor: "#444444",
      flexWrap: "wrap",
      flexDirection:"row",
      justifyContent: "flex-start",
      padding: 15,
      fontFamily: 'Manrope'
    },
    leftCol: {
      flexDirection:"row",
      justifyContent:"flex-start"
    },
    rightCol: {
      flex:1,
      flexDirection:"column",
      paddingLeft:15
    },
    topRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingBottom: 2
    },
    timestampRow: {
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center"
    },
    nameText: {
        fontSize: 14,
        color: "#FFFFFF",
        fontWeight: "bold",
        textAlign: 'left',
    },
    timestampText: {
      fontSize: 11,
      textAlign: 'right',
      color: "#888888",
    },
    messageText: {
        fontSize: 13,
        color: "#DDDDDD",
        fontWeight: "100",
        textAlign: 'left'
    },
    badge: {
        position: 'absolute',
        top: 0,
        left: 35,
        backgroundColor: "#7ba692",
        borderWidth: 1,
        borderColor: "#353535",
        color: "#222222"
    },
    iconButton: {
        backgroundColor: "#222222",
        padding: 0
    }
  });

export default MessageHeader;