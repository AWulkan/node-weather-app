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
    // The 'undefined' is where you could alternatively filter out properties
    // The '2' specifies 2 spaces indentation
    // console.log(JSON.stringify(response, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
