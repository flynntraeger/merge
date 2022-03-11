import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import { LinearProgress } from 'react-native-elements';

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <Image 
                source={{uri: this.props.picURL}}
                style={{width: "100%", height: 100}}
            />
            <View style={styles.botRow}>
                <Text style={styles.text}>{this.props.username}</Text>
                <Text style={styles.subText}>Lvl {this.props.level}</Text>
            </View>
            <LinearProgress
                style={styles.progressBar}
                value={this.props.progress}
                color={"#57B288"}
                trackColor={"#484848"}
                variant="determinate"
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: 105,
      flexDirection:"column",
      justifyContent: "flex-start",
      marginBottom:15
      
    },
    image: {
        width: "100%"
    },
    botRow: {
        backgroundColor: "#484848",
        width: "100%",
        padding: 7,
        paddingVertical: 5,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems: "center",
        color: "#DDDDDD"
    },
    progressBar: {
        marginTop: 7
    },
    text: {
        fontSize: 12,
        textAlign: 'left',
        color: "#DDDDDD"
    },
    subText: {
        fontSize: 10,
        textAlign: 'right',
        color: "#DDDDDD"
    }
  });

export default UserCard;