var assert = function(actual, expected){
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

//character video game player
//name --> string
//health --> number

//takeDamage --> subtract damage from health
//healDamage --> add health to health
//addItemToInv --> add a string to your inv []

var Player = function(name, health, inv){
    this.name = name;
    this.health = health || 100;
    this.inv = inv || [];
    this.takeDamage = function(dm) {
        this.health -= dm;
    };
    this.healDamage = function(dm) {
        this.health += dm;
    };
    this.addItemToInv = function(item) {
        this.inv.push(item);
    }
}



describe("testing game", function(){
    var player = new Player("testPlayerName");
    assert(player.name, "testPlayerName");
    player.takeDamage(20);
    assert(player.health, 80);
    player.healDamage(20);
    assert(player.health, 100);
    player.addItemToInv("sword");
    assert(player.inv[player.inv.length - 1], "sword");
})
