import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
    // everything in data object is assigned to new object
    Object.assign(this, data)

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function(diceCount) {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map(function(num){
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    this.getCharacterHtml = function(data) {
        // destructure "this" object so rest of function code is nice and clean
        const { id, name, avatar, health, diceCount, currentDiceScore, diceArray } = this;
        
        // declare diceHTML - later used to show multiple dice 
        let diceHTML = ""

        diceHTML = this.getDiceHtml(diceCount)

        return `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            <div class="dice-container">
                ${diceArray}
            </div>
        </div>`
    }   
}

export default Character