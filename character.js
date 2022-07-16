import {getDiceRollArray, getDicePlaceholderHtml} from "./utils.js"

function Character(data) {
    // everything in data object is assigned to new object
    Object.assign(this, data)

    // renders blank dice spots based on how many attacks character can make per turn 
    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    // stores character's max health
    this.maxHealth = this.health

    // renders out the dice below character
    this.getDiceHtml = diceCount => {
        this.currentDiceScore = getDiceRollArray(this.diceCount)
        this.diceArray = this.currentDiceScore.map( num => {
            return `<div class="dice">${num}</div>`
        }).join('')
    }

    // renders characters
    this.getCharacterHtml = data => {
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

    // function to calculate damage
    this.takeDamage = attackScoreArray => {

        const totalAttackScore = attackScoreArray.reduce((total, currentAttack) => total + currentAttack)

        this.health -= totalAttackScore

        // console log percentage of health remaining
        console.log(`${this.name} has ${Math.round(getPercentage(this.health, this.maxHealth))}% health remaining`)

        // if health reaches zero, character declared dead
        if (this.health <= 0) {
            this.health = 0
            this.dead = true;
        }
    }

}

// percentage of health a character has
const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth
    
export default Character