import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'
import MenuView from '../../components/common/MenuView';
import { FlatList } from 'react-native-gesture-handler';
import ServerList from '../../components/common/ServerList';
import { Thumbnail } from 'native-base';

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

    renderServer = (item) => {
        return (
            // console.log("HELLO",item),
            <ServerList
                item={item.item} />
            //alert(item.item.serverName)
        );
    }


    render() {
        let Servers = [];
        Servers = [
            { index: "1", serverName: "Server 1" },
            { index: "2", serverName: "Server 2" },
            { index: "3", serverName: "Server 3" },
            { index: "4", serverName: "Server 4" },
            { index: "5", serverName: "Server 5" },
            // { index: "6", serverName: "Server 6" },
            // { index: "7", serverName: "Server 7" },
            // { index: "8", serverName: "Server 8" },
            // { index: "9", serverName: "Server 9" },
            // { index: "10", serverName: "Server 10" },
        ];
        return (
            <View style={{ flex: 1, backgroundColor: "#262626" }}>
                <View style={{ flex: 0.15, flexDirection: "row", alignItems: "center", paddingHorizontal:10 }}>
                    <View style={{ flex: 1, borderColor: "#ffd200", borderBottomWidth: 5, }}>
                        <Text style={{ fontSize: 22, color: "#FFFFFF", alignSelf: "center", fontFamily: "Assistant-Bold", fontWeight: "bold", paddingVertical: 20 }}>Main System</Text>
                    </View>
                    <View style={{ flex: 1, borderColor: "#FFFFFF", borderBottomWidth: 1, }}>
                        <Text style={{ fontSize: 22, color: "#FFFFFF", alignSelf: "center", fontFamily: "Assistant-Bold", paddingVertical: 20 }}>Delivery</Text>
                    </View>
                </View>
                <View style={{ flex: 0.85, paddingHorizontal: 10,}}>
                    <ScrollView>
                    <Text style={{ fontSize: 18, color: "#FFFFFF", alignSelf: "center", fontFamily: "Assistant-Bold", paddingVertical: 20 }}>Tap to turn on/off server</Text>
                    <FlatList
                        data={Servers}
                        numColumns={3}
                        keyExtractor={(item) => item.index}
                        renderItem={this.renderServer}
                    />
                    <View style={{flex:1, flexDirection: "row", alignItems:"flex-start", marginVertical:20}}>
                    <View style={{ flexDirection: "row", paddingHorizontal:10 }}>
                        <View style={{ width: screenWidth * 0.05, height: screenHeight * 0.03, backgroundColor: '#e5ac00', margin: 5 }} />
                        <Text style={{ color: "#FFFFFF", fontSize: 18, alignSelf: "center" }}>On</Text>
                    </View>
                    <View style={{ flexDirection: "row", paddingHorizontal:10 }}>
                        <View style={{ width: screenWidth * 0.05, height: screenHeight * 0.03, backgroundColor: '#d8d8d8', margin: 5 }} />
                        <Text style={{ color: "#FFFFFF", fontSize: 18, alignSelf: "center" }}>Off</Text>
                    </View>
                </View>
                </ScrollView>
                </View>
                
            </View>
        )
    }
}

var styles = StyleSheet.create({

});

