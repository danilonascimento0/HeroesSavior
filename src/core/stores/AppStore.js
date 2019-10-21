import {observable} from "mobx";
import { getGnomesList } from '../../services/Service';
import { Toast } from 'native-base';

export default class AppStore {
    @observable loading;

    @observable lstAllGnomes;

    // for infinity scroll
    @observable lstGnomes; // list that goes to the screen
    round; // Where the app is on the whole list
    size; // Size of we want to bring by round

    @observable filteredList; // Result after using filtering

    @observable selectedForDetails; // Gnome selected to show more data

    constructor() {
        this.loading = false;

        this.lstAllGnomes = [];
        this.lstGnomes = [];

        this.round = 0;
        this.size = 21;

        this.filteredList = this.lstAllGnomes;

        this.selectedForDetails = false;
    }

    loadItens() {
        this.loading = true;
        getGnomesList().then((response) => {
            this.loading = false;
            if (response) {
                this.lstAllGnomes = response.data.Brastlewark;
                this.filteredList = this.lstAllGnomes;
                this.loadFirstTurn();
                // Toast.show({
                //     text: "Congrat's Hero, \n" +
                //         "you have gained the knowledge",
                //     buttonText: "Okay",
                //     position: "top",
                //     type: "success",
                //     duration: 30000
                // });
            }
        }).catch((error) => {
            this.loading = false;
            Toast.show({
                text: "A bunch of Orcs has crashed the endpoint, try latter",
                buttonText: "Okay",
                position: "top",
                type: "danger"
            });
        })
    }

    loadFirstTurn() { // Brings the first peace from the list
        this.round = 1;
        this.lstGnomes = [];
        this.lstGnomes = this.filteredList.slice(0, this.round*this.size);
    };

    loadNextTurn = () => { // Called when user gets the pages bottom
        if (this.lstGnomes.length < this.filteredList.length) {
            this.round = this.round+1;
            this.lstGnomes = [];
            this.lstGnomes = this.filteredList.slice(0, this.round*this.size);
        }
    };

    changeSeach(text) { // Do the search
        this.filteredList = this.lstAllGnomes.filter(gnome => gnome.name.toLowerCase().includes(text));
        this.loadFirstTurn();
    };

    selectForDetails = (item) => {
        this.selectedForDetails = item;
    };

    coloseModal = () => {
        this.selectedForDetails = false;
    };

}
