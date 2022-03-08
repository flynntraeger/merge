import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';

class GameCard extends React.Component {
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
                <Text style={styles.text}>{this.props.game}</Text>
            </View>  
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: 100,
      flexDirection:"column",
      justifyContent: "flex-start",
      marginBottom: 15
    },
    image: {
        width: "100%"
    },
    botRow: {
        backgroundColor: "#484848",
        width: "100%",
        padding: 7
    },
    text: {
        fontSize: 13,
        color: "#DDDDDD",
        textAlign: 'left'
    }
  });

export default GameCard;