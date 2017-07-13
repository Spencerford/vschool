// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % 'mod' operator computes remainders,
// so 17 % 10 is 7.

// Given a string, return a version without the first and last char, so 'Hello' yields 'ell'.

var problems = {
    lastDigit: function (num1, num2) {
        var isSame = true;
        var first = num1 % 10;
        var second = num2 % 10;
        if (first == second) {
            isSame = true;
        } else {
            isSame = false;
        }
        return isSame;
    },

    withoutEnd: function (str) {
        var string = str;
        var result = string.substring(1, string.length - 1);
        return result;
    }
};


module.exports = problems;
