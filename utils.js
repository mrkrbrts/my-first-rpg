function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(num) {
        return Math.floor(Math.random() * 6) +1
    })   
}

export {getDiceRollArray}