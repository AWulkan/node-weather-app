const YARGS = require("yargs");
const GEOCODE = require('./geocode/geocode');
const WEATHER = require('./weather/weather');

const argv = YARGS
    .options({
        a: {
            demand: true, // You MUST provide an address
            alias: "address",
            describe: "Address to fetch weather for",
            string: true // Always parse as a string
        }
    })
    .help()
    .alias("help", "h")
    .argv;


GEOCODE.geocodeAddress(argv.address).then((response) => {
    console.log(response.address);
    return WEATHER.getWeather(response.lat, response.lng);
}).then((response) => {
    let temperature = response.temperature;
    let apparentTemperature = response.apparentTemperature;
    let summary = response.summary;
    if (summary) {console.log(`Current weather: ${summary}.\n`);};
    console.log(`It's currently ${temperature}°C.\nIt feels like ${apparentTemperature}°C.`);
}).catch((error) => {
    console.log(error.message);
});
