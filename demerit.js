checkSpeed(130);
function checkSpeed(speed) {
    
    const speedLimit = 70;
    const kmPerPoint = 5

    if (speed < speedLimit + kmPerPoint){
        console.log("ok");
    return;
}
    
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if (points >= 12)
            console.log("licence suspended");
        else
            console.log("points", points);
    
}
 