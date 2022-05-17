//////////
//
// BUTTONS
//
//////////

const attackBtn = document.getElementById("attack-button")

//////////
//
// CHARACTERS
//
//////////

const wizard = {
    id: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const orc = {
    id: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

//////////
// 
// FUNCTIONS
//
//////////


function renderCharacter(character) {
    // declare variables for each property in character object
    const {id, name, avatar, health, diceCount} = character; 

    // declare diceHTML - later used to show multiple dice 
    let diceHTML = ""

    diceHTML = getDiceHTML(diceCount)


    document.getElementById(id).innerHTML =
        `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHTML}
            </div>
        </div>`
}


function getDiceRollArray(diceCount) {
    return new Array(diceCount).fill(0).map(function(num) {
        return Math.floor(Math.random() * 6) +1
    })   

}

function getDiceHTML(diceCount) {
    return getDiceRollArray(diceCount).map(function(num) {
        return `<div class="dice">${num}</div>`;
    }).join("")
}



renderCharacter(wizard);
renderCharacter(orc);
