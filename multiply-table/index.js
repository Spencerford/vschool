//create multiplication grid

let genTable = () => {
    let table = [];
    for (let i = 0; i < 10; i++) {
        table.push([]);
        for (let j = 0; j < 10; j++) {
            table[i].push((i + 1) * (j + 1));
        }
    }
    return table;
}

module.exports = genTable;