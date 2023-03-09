stringLenth = (string) => {
    if (string.length < 1) {
        return 'Error String value is Empty';
    }
    if (string.length > 10) {
        return 'Error String value is too long';
    }
    return string.length;

}

//Reverse String
reverseString = (string) => string.split('').reverse().join('');


const calculator = {
    add: (a, b) => a + b,
    substract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
}

//Capitalize String
capitalizeString = (string) => string[0].toUpperCase() + string.slice(1);

module.exports = { stringLenth, reverseString, calculator, capitalizeString };