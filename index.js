import React from 'react';
import {AppRegistry, View} from 'react-native';
import App from './App';
import { Provider } from 'mobx-react'
import {name as appName} from './app.json';
import {Root} from "native-base";
import Stores from './src/core/stores/BaseStore';

const ProviderConfigured = () => (
    <Provider {...Stores}>
        <View style={{ flex: 1 }}>
            <Root>
                <App />
            </Root>
        </View>
    </Provider>
);

AppRegistry.registerComponent(appName, () => ProviderConfigured);
