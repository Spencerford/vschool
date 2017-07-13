//classes ES6

//classes are simply construction functions.  They are not scary.

class person {
    constructor(name){
        this.isBaby = true;
        this.teeth = false;
        this.weight = 9;
        this.length = 14;
        this.gender = "male";
        this.hairColor = "blue";
        this.eduLevel = "none";
        this.age = 0;
        this.employer = [];
        this.friends = []
    }
    firstSteps(){
        this.takenFirstSteps = true;
    }
    hasBirthday(){
        this.age += 1;
    }
    startSchool(gradeLevel){
        this.eduLevel = gradeLevel;
    }
    getJob(employer){
        this.employer = employer;
    }
    makesFriend(name){
        this.friends.push(name);
    }
}

let spen = new person("spen");

spen.hasBirthday();
spen.hasBirthday();
spen.






console.log(spen);