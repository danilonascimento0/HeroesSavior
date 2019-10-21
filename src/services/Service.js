import axios from 'axios';
const BaseUrl = 'https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json';

axios.defaults.timeout = 500000;

const genericAxios = axios.create({
    baseURL: BaseUrl,
});

export const getGnomesList = () => {
    return genericAxios.get();
};
