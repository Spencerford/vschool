//create a wizard class that has the following properties
//name: string//
//hp: number
//spells: array of objects representing spells
    //each spell will have a name property and a damage property

//methods:
//attack will deal damage based on which spell is used

//create a group of wizards that are battling it out by calling attack methods


class Wizard {
    constructor (name, hp, spells){
        this.name = name;
        this.hp = hp || 100;
        this.spells = spells;
    }
    attack(wizard, spell){
        //make adjustments to wizards
    }
}

class Spell {
    constructor (name, damage){
        this.name = name;
        this.damage = damage
    }
};

let shaba = new Spell("Shaba", 40);
let wallaWalla = new Spell("wallaWalla", 25);
let evilSpell = new Spell("evil Spell", 20);


let spencer = new Wizard ("spen");

