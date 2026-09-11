const sumAll = function (a, b) {
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b) || a instanceof String || b instanceof String || typeof a !== "number" || typeof b !== "number" ) { return "ERROR" }
    else {
        let sum = 0
        if (a > b) {
            sum = 0;
            for (let i = b; i <= a; i++) {
                sum += i;
            }
            return sum;
        } else {
            sum = 0;
            for (let i = a; i <= b; i++) {
                sum += i;
            }
            return sum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
