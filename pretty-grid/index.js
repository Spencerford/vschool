let rs = require("readline-sync");
let genGrid = require("./grid.js");
let grid = genGrid();

let isActive = true;
while(isActive){
    console.log(grid);
    let coordinates = [0, 1, 2, 3, 4];
    let xcord = rs.keyInSelect(coordinates, 'what row do you choose? ');
    let ycord = rs.keyInSelect(coordinates, 'what character do you choose? ');
    let char = rs.question("what character would you like? ")

    grid[xcord][ycord] = char;

console.log(grid);

let keepPlaying = rs.keyInYN("do you want to keep playing?");
if(!keepPlaying) break;
}
