/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import CreateAppNavigator from './src/views/screens';

const ConnectedApp = () => {
    return (

        <CreateAppNavigator />


    )
}

AppRegistry.registerComponent(appName, () => ConnectedApp);
