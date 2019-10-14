import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash';
import MainDashboard from './MainDashboard'
import MainSystem from './MainSystem'
import ServerPercentage from './ServerPercentage'


const LoadingNavigator = createStackNavigator({
    Splash
});

// const AuthNavigator = createStackNavigator({
//     LoginView,
//     Onboarding,
//     SignupView
// }, {
//     initialRouteName: "LoginView"
// });

// const WorkSpaceNavigator = createStackNavigator({
//     MainDashboard
// },
//     {
//         initialRouteName: 'MainDashboard'
//     })

const AppNavigator = createStackNavigator(
    {
        MainDashboard,
        MainSystem,
        ServerPercentage
    },
    {
        initialRouteName: "ServerPercentage",
        headerMode: 'screen'
    }
);

const RootNavigator = createSwitchNavigator({
    LoadingNavigator,
    // AuthNavigator,
    AppNavigator,
    // WorkSpaceNavigator
}, {
    initialRouteName: "AppNavigator",
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    }
})
export default createAppContainer(RootNavigator);
