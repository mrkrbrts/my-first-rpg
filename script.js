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



const hero = {
    id: "hero",
    name: "Wizard",
    avatar: "images/wizard.png",
    health: 60,
    diceCount: 3
}

const monster = {
    id: "monster",
    name: "Orc",
    avatar: "images/orc.png",
    health: 10,
    diceCount: 1
}

//////////
// 
// CONSTRUCTORS
//
//////////

function Character(data) {
    this.id = data.id
    this.name = data.name
    this.avatar = data.avatar
    this.health = data.health
    this.diceCount = data.diceCount
    this.getCharacterHtml = function(data) {
        // destructure "this" object so rest of function code is nice and clean
        const { id, name, avatar, health, diceCount } = this;
        
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
}

const wizard = new Character(hero)
const orc = new Character(monster)

wizard.getCharacterHtml()
orc.getCharacterHtml()


//////////
// 
// FUNCTIONS
//
//////////


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


