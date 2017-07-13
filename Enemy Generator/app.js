var randomNum = function (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

var enemyTypes = function () {
    var enemies = ["Ancient Dragon", "Prowler", "Mighty Grunt"]
    var ranEnemies = randomNum(3, 0);

    return enemies[ranEnemies];
}
var hitPoints = function (enemy) {
    if (enemy === "Ancient Dragon") {
        return randomNum(100, 80);
    } else if(enemy === "Prowler"){
        return randomNum(79, 50);
    } else {
        return randomNum(49, 20);
    }
}

var Enemy = function () {
    this.type = enemyTypes();
    this.hitPoints = hitPoints(this.type);
    this.defense = this.hitPoints * 3;
    this.print = function () {
        console.log("The enemy " + this.type + " Has hit points of " + this.hitPoints + " and a defense of" + this.defense);
    }
};
var enemytype = enemyTypes();
var enemy1 = new Enemy(enemytype, hitPoints(enemytype));

enemy1.print();




