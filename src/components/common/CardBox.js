import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions, ImageBackground } from 'react-native';
import { Card, CardItem, Left, Right, Body, Thumbnail } from 'native-base'

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const CardBox = props => (
    <View style={{ height: screenHeight * 0.40, borderColor: "#FFFFFF", borderWidth: 1, borderRadius: 10, marginVertical:20 }}>
        <View style={{ padding: 10 }}>
            <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#ffd200', alignSelf: "center", fontWeight: "bold" }}>{props.item.Type}</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>

            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", fontWeight:"bold" }}>Ios</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#ffd200', alignSelf: "center", marginTop: -10 }} numberOfLines={1}>__</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.iosNumber}</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.iosAmount}</Text>
            </View>

            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", fontWeight:"bold" }}>Android</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#ffd200', alignSelf: "center", marginTop: -10 }} numberOfLines={1}>__</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.androidNumber}</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.androidAmount}</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", fontWeight:"bold" }}>Web</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#ffd200', alignSelf: "center", marginTop: -10 }} numberOfLines={1}>__</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.webNumber}</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center" }}>{props.item.webAmount}</Text>
            </View>
        </View>
        <View style={{ padding: 10 }}>
        <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: 'gray', alignSelf: "center", marginBottom:-20, marginTop:10}} numberOfLines={1}>______________</Text>

            <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#ffd200', alignSelf: "center", fontWeight: "bold", marginTop:30 }}>Total</Text>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>


            <View style={{ flex: 1, }}>
            <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", paddingHorizontal:20, fontWeight:"bold" }}>{props.item.Total}</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", paddingHorizontal:20 }}>Total</Text>
            </View>
            <View style={{ flex: 1 }}>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center", fontWeight:"bold"}}>{props.item.Amount}</Text>
                <Text style={{ fontFamily: "Assistant-Bold", fontSize: 16, color: '#FFFFFF', alignSelf: "center",}}>Amount</Text>

            </View>
        </View>
    </View>
);

export default CardBox;

const styles = StyleSheet.create({

});
