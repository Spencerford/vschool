var people = ["jon", "jacob", "jingle", "heimer", "schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
result = [];

for (var i = 0; i < people.length; i++) {
    result.push(people[i] + "");
    for (var x = 0; x < alphabet.length; x++) {
        result.push(alphabet[x] + "");
    }
}


console.log(result);
