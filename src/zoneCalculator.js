let originZone; 
let destZone;

const calcRegion = (continent) => {
    if (continent === "North America") {
        return "NA"
    } else if (continent === "Europe") {
        return "AT"
    } else if (continent === "Africa") {
        return "AT"
    } else if (continent === "South America") {
        return "SA"
    } else if (continent === "Oceania") {
        return "PA"
    } else if (continent === "Asia") {
        return "PA"
    } else if (continent === "Atlantic") {
        return "AT"
    }
}

const originZone = (cityArr) => {
    let originCountry = airportData[cityArr[0]].location;
    return calcRegion(originCountry)
}

const destZone = (cityArr) => {
    let destCountry = airportData[cityArr.length].location;
    return calcRegion(destCountry)
}

const totalPrice = (originZone, destZone, distance, cos) => {

}