import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import Splash from './Splash';
import MainDashboard from './MainDashboard'
import MainSystem from './MainSystem'


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
        MainSystem
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
