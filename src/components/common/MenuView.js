import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Dimensions,ImageBackground} from 'react-native';
const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const MenuView = props => (
  <TouchableOpacity onPress={props.onPress}>
  <View style={[{height:screenHeight*0.2, borderRadius:20, margin:10},props.style]}>
      <ImageBackground   imageStyle={{ borderRadius: 20}}
 style={{flex:1, justifyContent:"center",}} source={props.Image}>
      <Text style={{color:"#FFFFFF", fontFamily:"Assistant-Bold", fontSize:25,alignSelf:"center", fontWeight:"600"}}>{props.Heading}</Text>
      </ImageBackground>
  </View>
  </TouchableOpacity>
);

export default MenuView;

const styles = StyleSheet.create({
 
});
