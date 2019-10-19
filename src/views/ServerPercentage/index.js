import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text, TouchableOpacity  } from 'react-native'
import { Card, CardItem, Left, Right, Body, Thumbnail,Icon, Picker, Form  } from 'native-base'
import * as Progress from 'react-native-progress';
import { FlatList} from 'react-native-gesture-handler';

import CardBox from '../../components/common/CardBox';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

export default class ServerPercentage extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {
            progressAndroid:0.24,
            progressIos:0.30,
            progressWeb:0.46,
            selected: undefined

        }

    }

    renderServerInfo = (item) => {
        return (
            // console.log("HELLO",item),
            <CardBox
                item={item.item} />
            //alert(item.item.serverName)
        );
    }

    onValueChange(value) {
        this.setState({
          selected: value
        });
      }


    render() {

        let ServersInfo = [];
        ServersInfo = [
            {index: "1", Type:"All", iosNumber:"25", iosAmount:"₪25,000", androidNumber:"35", androidAmount:"₪35,000", webNumber:"45", webAmount:"₪45,000", Total:"150", Amount:"₪15,000"},
            {index: "2", Type:"Store 1", iosNumber:"25", iosAmount:"₪25,000", androidNumber:"35", androidAmount:"₪35,000", webNumber:"45", webAmount:"₪45,000", Total:"150", Amount:"₪15,000"},
            {index: "3", Type:"Store 2", iosNumber:"25", iosAmount:"₪25,000", androidNumber:"35", androidAmount:"₪35,000", webNumber:"45", webAmount:"₪45,000", Total:"150", Amount:"₪15,000"},   
        ];

        return (
            <View style={{ flex: 1, backgroundColor: "#262626",}}>
                <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal:20 }}>

                <Form style={{width:screenWidth*0.5, alignSelf:"center",  borderBottomColor:"#FFFFFF", borderBottomWidth:1, marginVertical:20 }}>
            <Picker style={{color:"#FFFFFF",}}
              mode="dropdown"
              placeholder="Select One"
              iosIcon={<Icon name="arrow-down" color={"#FFFFFF"}/>}
              placeholderStyle={{ color: "#FFFFFF" }}
              note={false}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="All" value="key0" />
              <Picker.Item label="Store 1" value="key1" />
              <Picker.Item label="Store 2" value="key2" />
            </Picker>
          </Form>


                <Card transparent style={{backgroundColor: "#262626" }}>
                    <CardItem style={{backgroundColor: "#262626",}}>
                        <Left style={{justifyContent:"center"}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ServerChart")}}>
                           <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressAndroid} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#0bffbf'} size={70} />
                        </TouchableOpacity>
                        </Left>
                        <Body style={{alignItems:"center"}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ServerChart")}}>
                        <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressIos} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#650bff'} size={70} />
                        </TouchableOpacity>
                        </Body>
                        <Right style={{alignItems:"center"}}>
                        <TouchableOpacity onPress={()=>{this.props.navigation.navigate("ServerChart")}}>
                        <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressWeb} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#ffd40b'} size={70} />
                        </TouchableOpacity>
                        </Right>
                    </CardItem>
                    <CardItem style={{backgroundColor: "#262626",}}>
                        <Left style={{justifyContent:"center"}}>
                            <Thumbnail square small source={require("../../assets/images/line.png")}/>
                          </Left>
                        <Body style={{alignItems:"center"}}>
                        <Thumbnail square small source={require("../../assets/images/line.png")}/>
                        </Body>
                        <Right style={{alignItems:"center"}}>
                        <Thumbnail square small source={require("../../assets/images/line.png")}/>
                        </Right>
                        </CardItem>
                    <CardItem style={{backgroundColor: "#262626",}}>
                        <Left style={{justifyContent:"center"}}>
                            {/* <Thumbnail square small source={require("../../assets/images/ios.png")}/> */}
                            <Icon name="android" type="MaterialIcons" style={{fontSize:46, color:"#FFFFFF"}}/>
                        </Left>
                        <Body style={{alignItems:"center"}}>
                        {/* <Thumbnail square small source={require("../../assets/images/android.png")}/> */}
                        <Icon name="logo-apple" type="Ionicons" style={{fontSize:46, color:"#FFFFFF"}}/>
                        </Body>
                        <Right style={{alignItems:"center"}}>
                        {/* <Thumbnail square small source={require("../../assets/images/web.png")}/> */}
                        <Icon name="monitor" type="Feather" style={{fontSize:46, color:"#FFFFFF"}}/>
                        </Right>
                    </CardItem>
                </Card>
                    <FlatList
                        data={ServersInfo}
                        keyExtractor={(item) => item.index}
                        renderItem={this.renderServerInfo}
                    />
                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({

});

