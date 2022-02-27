import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{this.props.title}</Text>
            <View style={styles.subContainer}>
                <Text style={styles.description}>{this.props.desc}</Text>
            </View>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection:"row",
      justifyContent: "space-between",
      fontFamily: 'Manrope',
      paddingHorizontal: 20,
      paddingTop: 40,
      paddingBottom: 15,
      backgroundColor:'#1D1D1D'
    },
    subContainer: {
        flexDirection:"column",
        justifyContent: "space-around",
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'left',
      color: "#FFFFFF",
    },
    description: {
        fontSize: 13,
        textAlign: 'right',
        color: "#888888",
    }
  });

export default TopBar;