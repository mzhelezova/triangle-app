export const checkFigureType = ( sides ) => {
    if(!Array.isArray(sides) || sides.length === 0) {
        throw new Error('Incorrect input');
    }
    
    // check for correct input
    for(const side of sides) {
        if(!side || isNaN(side)) {
            throw new Error('Invalid numbers');
        }

        if(side <= 0) {
            throw new Error('All values must positive');
        }
    }

    // check for valid input
    const sumAll = sides.reduce((result, side) => result + side, 0);
    for(const side of sides) {
        if(sumAll - side < side) {
            throw new Error('The figure is not valid');
        }
    }

    const groups = sides.reduce((result, side) => {
        (result[side] = result[side] || []).push(side);
        return result;
    },{});

    const numberOfGroups = Object.keys(groups).length;
    const numberOfSides = sides.length;

    if(numberOfGroups === numberOfSides) {
        return {
            triangleType: 'Scalene'
        }
    } else if(numberOfGroups === 1) {
        return {
            triangleType: 'Equilateral'
        }
    } else {
        return {
            triangleType: 'Isosceles'
        }
    }
};