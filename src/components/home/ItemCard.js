import React, { Component } from 'react';
import { StyleSheet, Text, Dimensions } from 'react-native';
import {Body, Button, Left, ListItem, Right, Thumbnail} from "native-base";
import {observer} from "mobx-react";

//region Render manager by screen size
const { width, height } = Dimensions.get('window');
//endregion

@observer
export default class ItemCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const imgUrl = this.props.item.thumbnail ? this.props.item.thumbnail : "";
        return (
            <ListItem style={[ styles.listItem, styles.generalBorder ]} thumbnail key={this.props.item.id}>
                <Left>
                    <Thumbnail square source={{ uri: imgUrl +`?w=${ width * 2 }&buster=${Math.random()}` }} />
                </Left>
                <Body>
                    <Text>Name: {this.props.item.name}</Text>
                    <Text>Age: {this.props.item.age}</Text>
                </Body>
                <Right>
                    <Button onPress={ () => this.props.selectForDetails(this.props.item) }  transparent>
                        <Text style={styles.details}>More</Text>
                    </Button>
                </Right>
            </ListItem>
        );
    }
}

const mainColor = 'grey';
const styles = StyleSheet.create({
    generalBorder: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: mainColor
    },
    listItem: {
        maxHeight: 70,
        width: width-30,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        margin: 4,
    },
    details: {
        color: mainColor, // Changes the text color
    },
});
