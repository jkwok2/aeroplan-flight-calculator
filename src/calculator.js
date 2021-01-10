const airportData = require('./resources/airports.json');
const countries = require('./resources/countries.json');
const ATAT = require('./resources/awardchartATAT.json');
const ATPA = require('./resources/awardchartATPA.json');
const ATSA = require('./resources/awardchartATSA.json');
const NAAT = require('./resources/awardchartNAAT.json');
const NANA = require('./resources/awardchartNANA.json');
const NAPA = require('./resources/awardchartNAPA.json');
const NASA = require('./resources/awardchartNASA.json');
const PAPA = require('./resources/awardchartPAPA.json');
const PASA = require('./resources/awardchartPASA.json');
const SASA = require('./resources/awardchartSASA.json');

class Calculator {
    constructor (inputString, cos) {
        this.inputString = inputString
        this.cos = cos
        this.cityArr = []
        this.distances = []
        this.originZone;
        this.destZone;

    }
}

let inputString = "YVR-YYZ-ZRH"; // from form;
let cos = "j" // from form
let cityArr = [];
let distances = [];
let originZone; 
let destZone;

const splitString = (inputString) => {
    cityArr = inputString.split("-");
}

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

const calcRegion = (country) => {
    if (countries[country] === "North America") {
        return "NA"
    } else if (countries[country] === "Europe") {
        return "AT"
    } else if (countries[country] === "Africa") {
        return "AT"
    } else if (countries[country] === "South America") {
        return "SA"
    } else if (countries[country] === "Oceania") {
        return "PA"
    } else if (countries[country] === "Asia") {
        return "PA"
    } else if (countries[country] === "Atlantic") {
        return "AT"
    }
}

const calcZone = (cityArr) => {
    let originCountry = airportData[cityArr[0]].location;
    let destCountry = airportData[cityArr[cityArr.length - 1]].location
    let originZone = calcRegion(originCountry);
    let destZone = calcRegion(destCountry);
    return originZone + destZone
}

const distToBand = (zone, dist) => {
    switch (zone) {
        case "ATAT":
            if (0 <= dist && dist <= 1000) {
                return "band1"
            } else if (1001 <= dist && dist <= 2000) {
                return "band2"
            } else if (2001 <= dist && dist <= 4000) {
                return "band3"
            } else if (4001 <= dist && dist <= 6000) {
                return "band4"
            } else if (6001 <= dist) {
                return "band5"
            } 
        case "ATPA":
            if (0 <= dist && dist <= 5000) {
                return "band1"
            } else if (5001 <= dist && dist <= 7000) {
                return "band2"
            } else if (7001 <= dist) {
                return "band3"
            }
        case "ATSA":
            if (0 <= dist && dist <= 7000) {
                return "band1"
            } else if (7001 <= dist) {
                return "band2"
            }
        case "NAAT":
            if (0 <= dist && dist <= 4000) {
                return "band1"
            } else if (4001 <= dist && dist <= 6000) {
                return "band2"
            } else if (6001 <= dist && dist <= 8000) {
                return "band3";
            } else if (8001 <= dist){
                return "band4";
            }
        case "NANA":
            if (0 <= dist && dist <= 500) {
                return "band1";
            } else if (501 <= dist && dist <= 1500){
                return "band2";
            } else if (1501 <= dist && dist <= 2750) {
                return "band3";
        
            } else if (2751 <= dist) {
                return "band4";
            }
        case "NAPA":
            if (0 <= dist && dist <= 5000) {
                return "band1";
            } else if (5001 <= dist && dist <= 7500) {
                return "band2";
            } else if (7501 <= dist && dist <= 11000) {
                return "band3";
            } else if (11001 <= dist) {
                return "band4";
            }

        case "NASA":
            if (0 <= dist && dist <= 4500) {
                return "band1";
            } else if (4501 <= dist) {
                return "band2";
            }
        
        case "PAPA":
            if (0 <= dist && dist <= 1000) {
                return "band1"
            } else if (1001 <= dist && dist <= 2000) {
                return "band2"
            } else if (2001 <= dist && dist <= 5000) {
                return "band3"
            } else if (5001 <= dist && dist <= 7000) {
                return "band4"
            } else if (7000 <= dist) {
                return "band5"
            } 
        case "PASA":
            if (0 <= dist && dist <= 11000) {
                return "band1"
            } else if (11000 <= dist) {
                return "band2"
            }
        case "SASA":
            return "band1"
        
    }
}

const totalPrice = (zone, band, cos) => {
    switch (zone) {
        case "ATAT":
            if (cos === "e") {
                return ATAT[band].economy
            } else if (cos == "j") {
                return ATAT[band].business
            } else if (cos == "f") {
                return ATAT[band].first
            }
        case "ATPA":
            if (cos === "e") {
                return ATAT[band].economy
            } else if (cos == "j") {
                return ATAT[band].business
            } else if (cos == "f") {
                return ATAT[band].first
            }
        case "ATSA":
            if (cos === "e") {
                return ASAS[band].economy
            } else if (cos == "j") {
                return ASAS[band].business
            } else if (cos == "f") {
                return ASAS[band].first
            }
        case "NAAT":
            if (cos === "e") {
                return NAAT[band].economy
            } else if (cos == "j") {
                return NAAT[band].business
            } else if (cos == "f") {
                return NAAT[band].first
            }
        case "NANA":
            if (cos === "e") {
                return NANA[band].economy
            } else if (cos == "j") {
                return NANA[band].business
            } else if (cos == "f") {
                return NANA[band].first
            }
        case "NAPA":
            if (cos === "e") {
                return NAPA[band].economy
            } else if (cos == "j") {
                return NAPA[band].business
            } else if (cos == "f") {
                return NAPA[band].first
            }
        case "NASA":
            if (cos === "e") {
                return NASA[band].economy
            } else if (cos == "j") {
                return NASA[band].business
            } else if (cos == "f") {
                return NASA[band].first
            }        
        case "PAPA":
            if (cos === "e") {
                return PAPA[band].economy
            } else if (cos == "j") {
                return PAPA[band].business
            } else if (cos == "f") {
                return PAPA[band].first
            }
        case "PASA":
            if (cos === "e") {
                return PASA[band].economy
            } else if (cos == "j") {
                return PASA[band].business
            } else if (cos == "f") {
                return PASA[band].first
            }
        case "SASA":
            if (cos === "e") {
                return SASA[band].economy
            } else if (cos == "j") {
                return SASA[band].business
            } else if (cos == "f") {
                return SASA[band].first
            }
    }
}

// yvr-yyz-zrh
// [yvr, yyz, zrh]
// [2079, 4033]
// [5000]

// let testinputString = "YVR-YYZ-ZRH";
// let testCityArr = []
// distInArray(cityArr);
// splitString(testinputString)
// distInArray(testCityArr);
// console.log(testcityArr)
// console.log(distances)
// console.log(totalDistance(distances))

splitString(inputString)
console.log(cityArr)
distInArray(cityArr)
console.log(distances)
testTotalDistance = totalDistance(distances)
console.log(testTotalDistance)
var testZone = calcZone(cityArr)
console.log(testZone)
var testBand = distToBand(testZone, testTotalDistance)
console.log(testBand)
var testTotalPrice = totalPrice(testZone, testBand, "j")
console.log(testTotalPrice)
