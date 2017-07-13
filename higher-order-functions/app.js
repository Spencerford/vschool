var students = ["Spencer", "Danyon", "Dakota", "Jordan"];

students.forEach(function(item){
    console.log(item);
});


var ages = [1, 3, 11, 6, 23, 4, 2, 99];

function checkAge(age){
    return age >= 10;
}

var younger = ages.filter(checkAge);
console.log(younger);



var nums = [1, 3, 5, 6, 8, 7, 9, 2];

var evens = nums.filter(function(number){
    if(number % 2 === 0 ){
        return true;
    } else {
        return false;
    }
})

console.log(evens);

var numbers = [1, 20, 4, 40, 7, 9, 100];

numbers.sort(function(a, b){
    return a - b;
})

console.log(numbers);