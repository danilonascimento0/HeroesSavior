import React, { Component } from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Thumbnail} from "native-base";
import {inject, observer} from "mobx-react";
import {styles, mainColor, width} from "../../assets/style/BaseStyle";

@inject("appStore")
@observer
export default class Details extends Component {

    constructor(props) {
        super(props);
        this.appStore = this.props.appStore;
    }

    renderModalListItem = (list, empyText) => { // Each item of Professions (Modal) is created Here
        if (list && list.length > 0){
            return list.map((item, x) => {
                return (
                    <View key={x} style={styles.modalInfoItem}>
                        <Text style={styles.modalInfoText}> {item} </Text>
                    </View>
                );
            })
        } else {
            return (
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> {empyText}</Text>
                </View>
            );
        }
    };

    isMale(name) {
        let firstName = name.split(" ")[0];
        let lastLetter = firstName[firstName.length-1];
        return (['s', 'i', 'k', 'n'].indexOf(lastLetter)>-1);
    }

    render() {
        return <ScrollView style={{flex: 1}}>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.modalTitle, styles.generalBorder]}
                onPress={() => {
                    this.appStore.coloseModal();
                }}>
                <Text style={styles.buttonCloseModal}> Close </Text>
            </TouchableOpacity>
            <View style={[styles.modalTitle]}>
                <Text style={styles.modalTitleName}>{this.appStore.selectedForDetails.name}</Text>
            </View>
            <View style={[styles.modalImageContainer]}>
                <Thumbnail square style={{width: width-(width*1/2), height: width-(width*1/2), borderRadius: 10, backgroundColor: mainColor}} source={{ uri: this.appStore.selectedForDetails.thumbnail +`?w=${ width * 2 }&buster=${Math.random()}` }} />
            </View>
            <View style={[styles.modalInfoContainer]}>
                <View style={styles.modalInfoType}>
                    <Text style={styles.modalTitleText}>--- Hero Info ---</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Name: {this.appStore.selectedForDetails.name}</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Age: {this.appStore.selectedForDetails.age}</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Gender: {this.isMale(this.appStore.selectedForDetails.name) ? "Male" : "Female"}</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Hair: {this.appStore.selectedForDetails.hair_color}</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Weight: {this.appStore.selectedForDetails.weight ? this.appStore.selectedForDetails.weight.toFixed(2) : "Unavaliable" }</Text>
                </View>
                <View style={styles.modalInfoItem}>
                    <Text style={styles.modalInfoText}> Height: {this.appStore.selectedForDetails.height ? this.appStore.selectedForDetails.height.toFixed(2) : "Unavaliable" }</Text>
                </View>
            </View>
            <View style={[styles.modalInfoContainer]}>
                <View style={styles.modalInfoType}>
                    <Text style={styles.modalTitleText}>--- Professions ---</Text>
                </View>
                {this.renderModalListItem(this.appStore.selectedForDetails.professions, "None Avaliable, He's just a lazy guy!")}
            </View>
            <View style={[styles.modalInfoContainer]}>
                <View style={styles.modalInfoType}>
                    <Text style={styles.modalTitleText}>--- Friends ---</Text>
                </View>
                {this.renderModalListItem(this.appStore.selectedForDetails.friends,"He have no friends!")}
            </View>
            <View style={{paddingBottom: 25}}/>
            <TouchableOpacity
                activeOpacity={0.5}
                style={[styles.modalTitle, styles.generalBorder]}
                onPress={() => {
                    this.appStore.coloseModal();
                }}>
                <Text style={styles.buttonCloseModal}> Close </Text>
            </TouchableOpacity>
            <View style={{paddingBottom: 25}}/>
        </ScrollView>
    }
}

