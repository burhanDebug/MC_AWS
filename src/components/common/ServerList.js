import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Thumbnail } from 'native-base';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const ServerList = props => (
    <TouchableOpacity style={{flex:1/3}} onPress={props.onPress}>
        {props.item.selected ?
            <View style={{ flex: 1 / 3, margin: 10, backgroundColor: '#e5ac00', height: screenHeight * 0.2, justifyContent: "center" }} >
                <Thumbnail medium square style={{ alignSelf: "center" }} source={require("../../assets/images/servericon.png")} />
                <Text style={{ fontFamily: "Assistant-Regular", color: "#454545", alignSelf: "center", padding: 5 }}>{props.item.serverName}</Text>
            </View>
            :
            <View style={{ flex: 1 / 3, margin: 10, backgroundColor: '#d8d8d8', height: screenHeight * 0.2, justifyContent: "center" }} >
                <Thumbnail medium square style={{ alignSelf: "center" }} source={require("../../assets/images/servericon.png")} />
                <Text style={{ fontFamily: "Assistant-Regular", color: "#454545", alignSelf: "center", padding: 5 }}>{props.item.serverName}</Text>
            </View>}
 
    </TouchableOpacity>

);

export default ServerList;

const styles = StyleSheet.create({

});
