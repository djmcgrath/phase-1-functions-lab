// Code your solution in this file!
const headQuarters = 42;
const manhattanBlock = 264;
function distanceFromHqInBlocks(blocks){
    if (headQuarters <= blocks){
        return blocks - headQuarters
    }
    else {
        return headQuarters - blocks
    } 
}

function distanceFromHqInFeet(blocks){
    return distanceFromHqInBlocks(blocks) * manhattanBlock
}

function distanceTravelledInFeet(start, destination){
    if (start <= destination){
        return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
    }
    else {
        return distanceFromHqInFeet(destination) - distanceFromHqInFeet(start)
    }
}

function calculatesFarePrice (start, destination){
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }
    else if(distanceTravelledInFeet(start, destination) >= 401 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * .02 
    }
    else if(distanceTravelledInFeet(start, destination) >= 2001 && distanceTravelledInFeet(start, destination) <= 2500){
        return 25
    }
    else {
        return `cannot travel that far`
    }
}