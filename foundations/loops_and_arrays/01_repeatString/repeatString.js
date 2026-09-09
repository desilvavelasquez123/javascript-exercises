const repeatString = function (str, num) {
    if (num < 0) { return "ERROR" } else {
        let counter = 0;
        let repeatedString = "";
        while (counter < num) {
            repeatedString += str;
            counter++;
        }
        return repeatedString;
    }
}

module.exports = repeatString;