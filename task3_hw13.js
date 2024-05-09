function getCircleLength(radius) {
    let length = 2 * Math.PI * radius;
    return parseFloat(length.toFixed(1));
};


function getCircleArea(radius) {
    let area = Math.PI * radius ** 2;
    return parseFloat(area.toFixed(2));
};

module.exports = {getCircleLength, getCircleArea};
