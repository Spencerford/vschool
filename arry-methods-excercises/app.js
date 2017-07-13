var fruit = ["banana", "strawberry", "orange", "apple"]
var vegetables = ["carrot", "tomato", "pepper", "lettuce"]

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);

vegetables.pop();
console.log(vegetables);

fruit.shift();
console.log(fruit);

var a = fruit.indexOf("orange");
console.log(a);

var b = fruit.indexOf("orange" + fruit.length)
console.log(b);

var len = vegetables.length ;
console.log(len);

var add = vegetables + len;
console.log(add);

var food = fruit.concat(vegetables);
console.log(food);

var cut = food.splice(4, 2);
console.log(cut);

var rev = food.reverse();
console.log(rev);

var str = rev;
console.log(str);

