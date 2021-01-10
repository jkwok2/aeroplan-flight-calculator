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
    // console.log(origLong);
    // origLong = toRadians(origLong);
    // console.log(origLong);
    // destLong = toRadians(origLat);
    // origLat = toRadians(destLong);
    // destLat = toRadians(destLat);

    // var dLat = toRadians(destLat - origLat)
    // var dLon = toRadians(destLong - origLong)
    // var lat1 = toRadians(origLat)
    // var lat2 = toRadians(destLat)

    // var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    //         Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2)
    // var c = 2 * Math.asin(Math.sqrt(a), Math.sqrt(1-a))
    // console.log(earthRadiusMiles * c)

    let distLat = toRadians(destLat - origLat);
    console.log("2: " + distLat);
    
    let distLong = toRadians(destLong - origLong);
    console.log("1: " + distLong);

    let originLat = toRadians(origLat);
    console.log("3: " + originLat)

    let destinationLat = toRadians(destLat);
    console.log("4: " + destinationLat)

    let sin2Lat = Math.sin(distLat / 2) * Math.sin(distLat / 2);
    console.log ("2nd: " + sin2Lat)

    let sin2Long = Math.sin(distLong / 2) * Math.sin(distLong / 2);
    console.log("5: " + sin2Long);

    let cosLat = Math.cos(toRadians(origLat))
    console.log("3rd: " + cosLat)

    let cosLong = Math.cos(toRadians(destLat));
    console.log("4th: " + cosLong)

    let b = sin2Lat + (sin2Long * cosLat * cosLong);
    console.log(b)

    // let a = Math.pow(Math.sin((distLong / 2), 2)) + Math.pow(Math.sin((distLat / 2), 2)) * Math.cos(toRadians(origLat)) * Math.cos(toRadians(destLat));
    // console.log("6: " + b);
    let c = 2 * Math.asin(Math.sqrt(b));
    console.log("7: " + c)
    console.log(earthRadiusMiles * c)
    // return earthRadiusMiles * c;
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


// const distInArray = (cityArr) => {
//     for (let i = 0; i < cityArr.length; i++) {
//         distances.push(calculateDistance(airportData[cityArr[i]].long, airportData[cityArr[i]].lat, 
//             airportData[cityArr[i+1]].long, airportData[cityArr[i+1]].lat));       
//     }
// }

// distInArray(cityArr);

// yvr-yyz-zrh
// [yvr, yyz, zrh]
// [2000, 3000]
// [5000]

console.log(cityArr)
// console.log(airportData[cityArr[0]].long)
// console.log(airportData[cityArr[0]].lat)
// console.log(airportData[cityArr[1]].long)
// console.log(airportData[cityArr[1]].lat)
calculateDistance(airportData[cityArr[0]].long, airportData[cityArr[0]].lat, airportData[cityArr[1]].long, airportData[cityArr[1]].lat)
// console.log(distances)
// console.log(airportData[cityArr[0]].long);





