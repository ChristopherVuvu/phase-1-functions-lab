// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLocation){
    const hq = 0;
    return Math.abs(pickUpLocation-hq)
}

function distanceFromHqInFeet(pickUpLocation){
    const feetPerBlock = 264;
    const blocks = distanceFromHqInBlocks(pickUpLocation);
    return blocks*feetPerBlock;
}

function distanceTravelledInFeet(start, destination){
const feetPerBlock = 264;
const blocks = Math.abs(start-destination);
return feetPerBlock*blocks;
}

function calculateFarePrice(start, destination){
    let feetTravelled = distanceTravelledInFeet(start, destination);
    let fare;
    if(feetTravelled <= 400){
        fare = 0;
    }else if(feetTravelled >400 && feetTravelled <=2000){
        fare = (feetTravelled-400)*0.02;
    }else if(feetTravelled > 2000 && feetTravelled <= 2500){
        fare = 25;
    }else{
        return "Cannot travel that far";
    }
    return fare
}
console.log(calculateFarePrice(5, 10));