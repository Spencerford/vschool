var assert = function(expected, actual){
    if(expected != actual){
        throw {actual: actual, expected: expected}
    } else {
        console.log("Test passed", {actual: actual, expected: expected});
    }
};

var describe = function(message, testFunc){
    console.log(message);
    try {
        testFunc();
    } catch(err){
        console.log("your test failed", err);
    }
};

var add = function(a, b){
    return a + b;
};

var sub = function(a, b){
    return a- b;
};

var mult = function(a, b){
    return a * b;
}

var divide = function(a, b){
    return a / b;
}

var mod = function (a, b){
    return a % b;
}

describe("testing the calculator", function(){
    assert(add(4, 4), 8);
    assert(sub(4, 5), -1);
    assert(mult(4, 4), 16);
    assert(divide(16, 4), 4);
    assert(mod(6, 2), 0);
})