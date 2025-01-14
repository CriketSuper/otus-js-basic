function concatNumber(number) {
    number = number.toString().split('').map(Number);
    console.log(number[0] + number[1] + number[2]);
}

module.exports = concatNumber;