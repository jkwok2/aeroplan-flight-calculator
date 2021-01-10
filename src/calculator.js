const airportData = require('./resources/airports.json');
const countries = require('./resources/countries.json');

let inputString = "YVR-YYZ-ZRH"; // from form;
let cos = "j" // from form
let cityArr = [];
let distances = [];

const splitString = (inputString) => {
    cityArr = inputString.split("-");
}

splitString(inputString)

// Use Haversine Function to calculate distance
const calculateDistance = (origLong, origLat, destLong, destLat) => {
    const earthRadiusMiles = 3958.756  //miles (6371  km)

    let distLat = toRadians(destLat - origLat);    
    let distLong = toRadians(destLong - origLong);

    let sin2Lat = Math.sin(distLat / 2) * Math.sin(distLat / 2);
    let sin2Long = Math.sin(distLong / 2) * Math.sin(distLong / 2);
    let cosOLat = Math.cos(toRadians(origLat))
    let cosdLat = Math.cos(toRadians(destLat))

    let b = sin2Lat + (sin2Long * cosOLat * cosdLat);
    let c = 2 * Math.asin(Math.sqrt(b));
    return Math.round(earthRadiusMiles * c);
}

// helper function to convert degrees to radians
function toRadians(degrees) {
    return degrees * Math.PI / 180;
    
}

const totalDistance = (distances) => {
    let result = 0;
    for (let i = 0; i < distances.length; i++) {
        result += distances[i];
    }
    return result;
}


const distInArray = (cityArr) => {
    for (let i = 0; i < cityArr.length - 1; i++) {
        distances.push(calculateDistance(airportData[cityArr[i]].long, airportData[cityArr[i]].lat, airportData[cityArr[i+1]].long, airportData[cityArr[i+1]].lat));       
    }
}

distInArray(cityArr);

// yvr-yyz-zrh
// [yvr, yyz, zrh]
// [2079, 4033]
// [5000]

console.log(cityArr)
console.log(distances)
console.log(totalDistance(distances)) // DISPLAY THIS





