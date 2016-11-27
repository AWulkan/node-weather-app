const REQUEST = require("request");

REQUEST({
    url: "https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia",
    json: true
}, (error, response, body) => {
    // The 'undefined' is where you could alternatively filter out properties
    // The '2' specifies 2 spaces indentation
    // console.log(JSON.stringify(response, undefined, 2));
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});
