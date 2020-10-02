import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://chandanrs-burger-builder.firebaseio.com/'
})

export default instance;