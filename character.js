import {getDiceRollArray} from "./utils.js"

function Character(data) {
    // everything in data object is assigned to new object
    Object.assign(this, data)

    this.getDiceHTML = function(diceCount) {
        return getDiceRollArray(diceCount).map(function(num) {
            return `<div class="dice">${num}</div>`;
        }).join("")
    }

    this.getCharacterHtml = function(data) {
        // destructure "this" object so rest of function code is nice and clean
        const { id, name, avatar, health, diceCount } = this;
        
        // declare diceHTML - later used to show multiple dice 
        let diceHTML = ""

        diceHTML = this.getDiceHTML(diceCount)

        return `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceHTML}
            </div>
        </div>`
    }   
}

export default Character