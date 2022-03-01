import React from 'react';
import { View, StyleSheet} from 'react-native';
import { Home, Bell, Mail, Calendar, User } from "react-native-feather";
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Button 
                icon={<Home stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
                onPress={()=>navigation.navigate("Home Screen")}
            />
            <Button 
                icon={<Bell stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
            <Button 
                icon={<Mail stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
            <Button 
                icon={<Calendar stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
            <Button 
                icon={<User stroke="white" width={26} height={26} />}
                buttonStyle={styles.iconButton}
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      width: "100%",
      position: "absolute",
      bottom: 0,
      flexDirection:"row",
      justifyContent: "space-between",
      fontFamily: 'Manrope',
      paddingHorizontal: 40,
      paddingVertical: 25,
      backgroundColor:'#1D1D1D'
    },
    iconButton: {
      backgroundColor:'#1D1D1D',
      padding: 0,
    }
  });

export default TopBar;