const sumAll = function(a, b) {
    let sum = 0
    if ( a > b) {
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
};

// Do not edit below this line
module.exports = sumAll;
