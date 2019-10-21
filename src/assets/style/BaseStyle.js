import {Dimensions, StyleSheet} from "react-native";

export const { width, height } = Dimensions.get('window');
export const sizeTopbar = 58;
export const mainColor = 'grey';

export let styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    generalBorder: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: mainColor
    },
    list: {
        flex: 1,
        marginTop: sizeTopbar+10,
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
    searchFiled: {
        padding: 8, // Fixing internal size
        backgroundColor: 'white', // To keep the input bar visible
        // Those margins are for showing the bar background
        marginTop: 10,
        marginBottom: 10,
        marginRight: 20,
        marginLeft: 20,
        borderRadius: 8, // Makes the interface smoother
        fontSize: 16, // Increase visibility
    },
    topBar: { // Creating a top bar fixed on top
        flex: 1,
        position: 'absolute',
        top: 0,
        backgroundColor: mainColor, // A background color for better experience
        width: width, // Sets the max size
        height: sizeTopbar, //
    },
    modalTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 15
    },
    modalTitleName: {
        color: mainColor,
        fontSize: 18
    },
    modalImageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInfoContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        paddingTop: 20
    },
    modalInfoType: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    },
    modalInfoItem: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
    },
    modalInfoText: {
        color: mainColor,
        fontSize: 16
    },
    modalTitleText: {
        color: mainColor,
        fontSize: 18
    },
    buttonCloseModal: {
        color: mainColor,
        fontSize: 18,
    }
});