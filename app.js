const YARGS = require("yargs");

const GEOCODE = require("./geocode/geocode");

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

GEOCODE.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});
