import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView } from 'react-native'
import MenuView from '../../components/common/MenuView';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class MainDashboard extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {

        }

    }


    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#262626" }}>
                <ScrollView>
                    <MenuView Image={require("../../assets/images/servers.png")}
                        Heading={"Servers"}
                        style={{ marginTop: 40 }}
                        onPress={()=>{this.props.navigation.navigate("MainSystem")}} />
                    <MenuView Image={require("../../assets/images/statics.png")}
                        Heading={"Statics"} 
                        onPress={()=>{this.props.navigation.navigate("MainSystem")}}/>

                    <MenuView Image={require("../../assets/images/bi.png")}
                        Heading={"Bi"} 
                        onPress={()=>{this.props.navigation.navigate("MainSystem")}}/>

                    <MenuView Image={require("../../assets/images/scheduling.png")}
                        Heading={"Scheduling"} 
                        onPress={()=>{this.props.navigation.navigate("MainSystem")}}/>

                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({

});

