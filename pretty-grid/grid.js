

let genGrid = () => {
    let grid = [];

    for(let i = 0; i < 5; i++){
        grid.push([]);
            for(let x = 0; x < 5; x++){
                grid[i].push("o");
            }
    }
    return grid
}

module.exports = genGrid;