import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Text } from 'react-native'
import { Card, CardItem, Left, Right, Body, Thumbnail } from 'native-base'
import * as Progress from 'react-native-progress';
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

        }

    }


    render() {

        return (
            <View style={{ flex: 1, backgroundColor: "#262626", paddingHorizontal:20 }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Card transparent style={{backgroundColor: "#262626" }}>
                    <CardItem style={{backgroundColor: "#262626",}}>
                        <Left style={{justifyContent:"center"}}>
                           <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressAndroid} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#0bffbf'} size={70} />
                        </Left>
                        <Body style={{alignItems:"center"}}>
                        <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressIos} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#650bff'} size={70} />
                        </Body>
                        <Right style={{alignItems:"center"}}>
                        <Progress.Circle animated={true} showsText={true} thickness={4} textStyle={{color:"#FFFFFF"}} progress={this.state.progressWeb} borderWidth={0} unfilledColor={'#FFFFFF'} color={'#ffd40b'} size={70} />
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
                            <Thumbnail square small source={require("../../assets/images/ios.png")}/>
                        </Left>
                        <Body style={{alignItems:"center"}}>
                        <Thumbnail square small source={require("../../assets/images/android.png")}/>
                        </Body>
                        <Right style={{alignItems:"center"}}>
                        <Thumbnail square small source={require("../../assets/images/web.png")}/>
                        </Right>
                    </CardItem>
                </Card>
                <CardBox
                Type={"All"}
                iosNumber={"25"}
                iosAmount={"25000"}
                androidNumber={"35"}
                androidAmount={"35000"}
                webNumber={"45"}
                webAmount={"45000"}
                Total={"150"}
                Amount={"15000"}/>
                </ScrollView>
            </View>
        )
    }
}

var styles = StyleSheet.create({

});

