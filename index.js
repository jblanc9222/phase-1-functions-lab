// Code your solution in this file!

function distanceFromHqInBlocks (location) {
    let distanceB = location - 42;
    return Math.abs(distanceB)
} 

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;
}


function distanceTravelledInFeet(start, destination) {
    let distanceC = (start - destination) * 264
    return Math.abs(distanceC)
}
function calculatesFarePrice(start, destination) {
    const feetDistance = distanceTravelledInFeet(start, destination);
    if (feetDistance < 400) {
        return 0;
    } else if (feetDistance < 2000) {
        return 2.56;
    } else if (feetDistance > 2000 && feetDistance < 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}