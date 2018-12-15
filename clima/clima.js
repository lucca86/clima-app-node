const axios = require('axios');

const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=c573bba48147234047381b915d498953`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}