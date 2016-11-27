const REQUEST = require("request");
const YARGS = require("yargs");

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

let encodedAddress = encodeURIComponent(argv.address);

REQUEST({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    if (error) {
        console.log("Unable to connect to the Google server.");
    } else if (body.status === "ZERO_RESULTS") {
        console.log("Unable to find that address.");
    } else if (body.status === "OK") {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
});
