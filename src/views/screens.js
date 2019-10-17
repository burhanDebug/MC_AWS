import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash';
import MainDashboard from './MainDashboard';
import MainSystem from './MainSystem';
import ServerPercentage from './ServerPercentage';
import ServerChart from './ServerChart';
import Alarm from './Alarm';


const LoadingNavigator = createStackNavigator({
    Splash
});



const AppNavigator = createStackNavigator(
    {
        MainDashboard,
        MainSystem,
        ServerPercentage,
        ServerChart,
        Alarm
    },
    {
        initialRouteName: "MainDashboard",
        headerMode: 'screen'
    }
);

const RootNavigator = createSwitchNavigator({
    LoadingNavigator,
    // AuthNavigator,
    AppNavigator,
    // WorkSpaceNavigator
}, {
    initialRouteName: "LoadingNavigator",
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    }
})
export default createAppContainer(RootNavigator);
