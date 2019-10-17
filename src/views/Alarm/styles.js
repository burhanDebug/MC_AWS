import { StyleSheet,Platform,Dimensions} from 'react-native';

const {height:screenHeight, width:screenWidth} = Dimensions.get('window');

export default StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: "#262626"
    },
    HeaderContainer:{
        flex: 1, 
        marginVertical: 10, 
        borderColor: "white",
        borderBottomWidth: 1,
        //backgroundColor:"black",
        paddingTop:10
    },

    SelectedHeaderContainer:{
        flex: 1, 
        //marginVertical: 10, 
        borderColor: "white",
        borderBottomWidth: 1,
        backgroundColor:"#404040",
        paddingTop:10
    },

    rowStyle:{
        flexDirection: "row"
    },
    TextStyle:{
        fontFamily: "Assistant-Bold", 
        fontSize: 20, 
        fontWeight: "bold", 
        paddingHorizontal: 18, 
        color: "white"
    },
    DayText:{
        fontFamily: "Assistant-Bold", 
        fontSize: 18,  
        justifyContent: "space-around", 
        color: "white"
    },
    HeaderBarView:{
        flex: 0.15, 
        flexDirection: "row", 
        alignItems: "center", 
        paddingHorizontal: 10 
    },
    HeaderBarText:{
        fontSize: 18, 
        color: "#FFFFFF", 
        alignSelf: "center", 
        fontFamily: "Assistant-Bold", 
        paddingTop: 10
    },
    ButtonImage:{
        alignSelf: "center", 
        justifyContent: "flex-end", 
        marginBottom: 10
    },
    Button:{
        justifyContent: "flex-end", 
        
    },
    MainAndDeliveryText:{
        fontSize: 20, 
        color: "#FFFFFF", 
        alignSelf: "center", 
        fontFamily: "Assistant-Bold", 
        fontWeight: "bold", 
        paddingVertical: 20 
    },
    MainHeaderBarLine:{
        flex: 1, 
        borderColor: "#ffd200", 
        borderBottomWidth: 5,
    },
    DeliveryHeaderBarLine:{
        flex: 1, 
        borderColor: "#FFFFFF", 
        borderBottomWidth: 1,
    },
    scrollview:{
        flex: 0.85, 
        paddingHorizontal: 10,
    },
    SubHeading:{
        fontFamily: "Assistant-Bold", 
        fontSize: 18, 
        fontWeight: "bold", 
        paddingHorizontal: 20, 
        color: "white",
        paddingVertical:10,
        
    }
  });
  