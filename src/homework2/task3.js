function CircleInSquare(circle, square) {
    const radius = Math.sqrt(circle / Math.PI);
    const side = Math.sqrt(square);
    const halfSide = side / 2;

    return radius <= halfSide;
}

module.exports = CircleInSquare;