import React, { Component } from 'react';
import {View, FlatList, Text, TextInput, Modal} from 'react-native';
import {Container, Content, Spinner} from "native-base";
import {inject, observer} from "mobx-react";
import Details from "../details/Details";
import TopBar from "../commun/TopBar";
import {styles, mainColor, width, height} from "../../assets/style/BaseStyle";
import ItemCard from "./ItemCard";

@inject("appStore")
@observer
export default class Home extends Component {

    constructor(props) {
        super(props);
        this.appStore = this.props.appStore;
    }

    componentDidMount() {
        this.appStore.loadItens(); // Bring firs items after rendering the page
    }

    renderItem = ({ item }) => { // Each item is created here
        return (
            <ItemCard item={ item } selectForDetails={ () => this.appStore.selectForDetails(item) } />
        );
    };

    loadNewItens = () => {
        this.appStore.loadNextTurn();
    };

    renderModal(){
        if(this.appStore.selectedForDetails !== false) {
            return(
                <Modal
                    transparent={false}
                    animationType={'fade'}
                    visible={this.appStore.selectedForDetails !== false}
                    onRequestClose={() => {
                        this.appStore.coloseModal();
                    }}>
                    <Details />
                </Modal>
            );
        }
        return null;
    }

    renderList() { // rendering the list already filtered and sliced
        return(
            <View style={{flex: 1, width: width, height: height}}>
                { this.searchBar() }
                { this.renderModal() }
                <View style={styles.list}>
                    <FlatList
                        initialNumToRender={21}
                        keyExtractor={(item, index) => index.toString()}
                        data={this.appStore.lstGnomes.slice()}
                        bounces={false}
                        renderItem={this.renderItem}
                        numColumns={1}
                        onEndReached={this.loadNewItens}
                        onEndReachedThreshold={0.01}
                    />
                </View>
            </View>
        );
    }

    handleSearch = (text) => {
        this.appStore.changeSeach(text.toLowerCase());
    };

    searchBar = () => {
        return (
            <TopBar>
                <View>
                    <TextInput style={styles.searchFiled} placeholder={"Search here"} onChangeText={ (text) => this.handleSearch(text) } />
                </View>
            </TopBar>
        );
    };

    renderLoading() { // Shows loading
        return(
            <Container>
                <Content>
                    <Spinner color={ mainColor } />
                </Content>
            </Container>
        );
    };

    render() {
        if (this.appStore.loading) {
            return this.renderLoading();
        } else {
            return this.renderList();
        }
    }
}
