import React from 'react';
import { StyleSheet, View, StatusBar, Animated, Dimensions, Easing, Image, ImageBackground, Text } from 'react-native'
import { Thumbnail } from "native-base"
import * as Progress from 'react-native-progress';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');


export default class Splash extends React.Component {
    static navigationOptions = {
        header: null,
    };


    constructor(props) {
        super(props);
        this.state = {
            progress: 0
        }

    }

    Loader = () => {
        setTimeout((function () {
            //this.setState({ progress: this.state.progress + (1 * Math.random())});
            this.setState({ progress: this.state.progress + (1 * 0.50) });
        }).bind(this), 800);

    }

    render() {
        return (

            <ImageBackground source={require("../assets/images/background.jpg")} style={{ flex: 1 }}>
                {this.state.progress === 1 ?
                    this.props.navigation.navigate("MainDashboard") :

                    this.Loader()}
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <View style={{ flex: 0.3, marginTop: 30 }}>
                        <Text style={{ fontFamily: "Assistant-Bold", fontSize: 50, alignSelf: "center", color: "#FFFFFF", fontWeight: "bold" }}>McDonald's</Text>
                        <Text style={{ fontFamily: "Assistant-Bold", fontSize: 50, alignSelf: "center", color: "#FFFFFF", fontWeight: "bold" }}>Manager</Text>
                        <Thumbnail square large style={{ alignSelf: "center", marginTop: 10, resizeMode: "contain" }} source={require("../assets/images/logo.png")} />
                    </View>
                    <View style={{ flex: 0.7, justifyContent: "flex-end" }}>
                        <Text style={{ alignSelf: "center", color: "#FFFFFF" }}>{(this.state.progress) * 100}%</Text>
                        <View style={{ marginBottom: 50, alignItems: "center", }}>
                            <Progress.Bar progress={this.state.progress} width={screenWidth * 0.8} color={'#ff9300'} unfilledColor={"#FFFFFF"} borderWidth={0} height={12} borderRadius={20} />
                        </View>
                    </View>
                </View>

            </ImageBackground>
        )
    }
}

var styles = StyleSheet.create({

});

