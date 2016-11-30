const AXIOS = require('axios');
const APIKEYS = require("../apikeys");

var getWeather = (lat, lng) => {
    let weatherUrl = `https://api.darksky.net/forecast/${APIKEYS.darkSkyKey}/${lat},${lng}?units=si`;

    return AXIOS.get(weatherUrl).then((response) => {
        return {
            temperature: response.data.currently.temperature,
            apparentTemperature: response.data.currently.apparentTemperature,
            symmary: response.data.currently.summary
        };
    });
};

module.exports.getWeather = getWeather;
