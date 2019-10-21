import React, { Component } from 'react';
import {Dimensions, StyleSheet, View} from "react-native";
import {inject} from "mobx-react";
import { styles } from "../../assets/style/BaseStyle";

@inject("appStore")
export default class TopBar extends Component {
    constructor(props) {
        super(props);

        this.appStore = this.props.appStore;
    }

    render() {
        return <View style={styles.topBar}>
            { this.props.children }
        </View>
    }
}
