const REQUEST = require("request");
const APIKEYS = require("../apikeys/apikeys");

// https://api.darksky.net/forecast/[key]/[latitude],[longitude]

let getWeather = (lat, lng, callback) => {
    REQUEST({
        url: `https://api.darksky.net/forecast/${APIKEYS.darkSkyKey}/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback("Unable to fetch weather.");
        }
    });
};

module.exports.getWeather = getWeather;
