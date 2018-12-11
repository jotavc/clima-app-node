const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/find?lat=${lat}&lon=${lng}&units=metric&APPID=b76d8a2c308a564575b9297fa5586aa5`)

    if (resp.data.cod === '400') {
        throw new Error(`No hay resultados para las cordenadas ${lat} , ${lng}`);
    }

    return resp.data.list[1].main.temp;

}

module.exports = {
    getClima
}