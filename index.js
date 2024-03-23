// index.js

// Calculates the distance in blocks from the pickup location to the headquarters
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    return Math.abs(pickupLocation - headquarters);
}

// Calculates the distance in feet from the pickup location to the headquarters
function distanceFromHqInFeet(pickupLocation) {
    const blockInFeet = 264; // One block is 264 feet
    return distanceFromHqInBlocks(pickupLocation) * blockInFeet;
}

// Calculates the total distance travelled in feet based on start and destination
function distanceTravelledInFeet(start, destination) {
    const blockInFeet = 264; // One block is 264 feet
    return Math.abs(start - destination) * blockInFeet;
}

// Calculates the fare price based on the total distance travelled
function calculatesFarePrice(start, destination) {
    const totalDistance = distanceTravelledInFeet(start, destination);

    if (totalDistance <= 400) {
        return 0; // Free sample
    } else if (totalDistance > 400 && totalDistance <= 2000) {
        return (totalDistance - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (totalDistance > 2000 && totalDistance <= 2500) {
        return 25; // $25 flat fare for distances over 2000 feet
    } else {
        return 'cannot travel that far'; // Return this message for distances over 2500 feet
    }
}

