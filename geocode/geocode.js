const AXIOS = require('axios');

var geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address);
    let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

    return AXIOS.get(geocodeUrl).then((response) => {
        if (response.data.status === 'ZERO_RESULTS') {
            throw new Error('Unable to find that address.');
        }

        return {
            lat: response.data.results[0].geometry.location.lat,
            lng: response.data.results[0].geometry.location.lng,
            address: response.data.results[0].formatted_address
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;
