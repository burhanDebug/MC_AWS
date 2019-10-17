import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'
import { Card, CardItem, Left, Right, Body, Thumbnail, Icon, Picker, Form } from 'native-base'
import { FlatList } from 'react-native-gesture-handler';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";

const data = [
    { server: "1", hours: "100" },
    { server: "2", hours: "300" },
    { server: "3", hours: "500" },
    { server: "4", hours: "700" }
];

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class ServerChart extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {
            selected: undefined

        }

    }

    onValueChange(value) {
        this.setState({
            selected: value
        });
    }



    render() {
        return (
            <View style={{ flex: 1,
            backgroundColor: "#454545", 
             }}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20, }}>

                    <Form style={{ width: screenWidth * 0.5, alignSelf: "center", borderBottomColor: "#FFFFFF", borderBottomWidth: 1, marginTop: 20, marginBottom:50 }}>
                        <Picker style={{ color: "#FFFFFF", }}
                            mode="dropdown"
                            placeholder="Select One"
                            iosIcon={<Icon name="arrow-down" color={"#FFFFFF"} />}
                            placeholderStyle={{ color: "#FFFFFF" }}
                            note={false}
                            selectedValue={this.state.selected}
                            onValueChange={this.onValueChange.bind(this)}
                        >
                            <Picker.Item label="All" value="key0" />
                            <Picker.Item label="All 1" value="key1" />
                            <Picker.Item label="All 2" value="key2" />
                            <Picker.Item label="All 3" value="key3" />
                            <Picker.Item label="All 4" value="key4" />
                        </Picker>
                    </Form>

                    <View style={{flex:1,alignSelf:"center", paddingVertical:10, borderRadius:10}}>
                    <VictoryChart
                        style={{
                        data: { fill: "#ffd200", opacity: 1 },
                        labels: { fontSize: 12,fill:"#FFFFFF" },
                        parent: { border: "1px solid #fff" }, grid: { stroke: "#818e99", strokeWidth: 1 },
                      }}
                     
                      domainPadding={10}
                      
                      >
                  
                        <VictoryBar horizontal
                                      theme={VictoryTheme.material}

                            //barWidth={({ index }) => index * 2 + 8}
                            //barWidth={30}
                            style={{
                                data: { fill: "#ffd200", opacity: 1 },
                                labels: { fontSize: 12,fill:"#FFFFFF" },
                                parent: { border: "1px solid #fff" }, grid: { stroke: "#818e99", strokeWidth: 1 },
                              }}
                            data={data} x="server" y="hours"
                            labels={({ datum }) => `y: ${datum.y}`}
                        />
                    <Text style={{fontFamily:"Assistant-Bold", fontSize:16, alignSelf:"flex-start", color:"#FFFFFF", marginHorizontal:30}}>Servers</Text>
                    </VictoryChart>
                    <Text style={{fontFamily:"Assistant-Bold", fontSize:16, alignSelf:"flex-end", color:"#FFFFFF", marginHorizontal:30}}>Hours</Text>
</View>
                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({

});

