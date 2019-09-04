//Pemanggilan libaray axios
const axios = require('axios');

//url api
const url = 'https://rickandmortyapi.com/api/character';

//Action GET METHOD
axios.get(url).then(res => {
    //Jika success akan tertampil disini
    console.log(res.data.results);
}).catch(err => {
    //Jika error akan tertampil disini
    console.log(err);
})