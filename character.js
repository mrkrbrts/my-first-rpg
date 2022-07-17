import {getDiceRollArray, getDicePlaceholderHtml, getPercentage} from "./utils.js"

class Character {
    constructor(data) {
        // everything in data object is assigned to new object
        Object.assign(this, data)

        // renders blank dice spots based on how many attacks character can make per turn 
        this.diceHtml = getDicePlaceholderHtml(this.diceCount)

        // stores character's max health
        this.maxHealth = this.health

        // renders out the dice below character
        this.setDiceHtml = diceCount => {
            this.currentDiceScore = getDiceRollArray(this.diceCount)
            this.diceHtml = this.currentDiceScore.map(num => {
                return `<div class="dice">${num}</div>`
            }).join('')
        }

        // renders characters
        this.getCharacterHtml = data => {
            // destructure "this" object so rest of function code is nice and clean
            const { id, name, avatar, health, diceCount, currentDiceScore, diceHtml } = this

            // declare diceHTML - later used to show multiple dice 
            let diceHTML = ""

            const healthBar = this.getHealthBarHtml()

            diceHTML = this.setDiceHtml(diceCount)

            return `<div class="character-card">
            <h4 class="name"> ${name} </h4>
            <img class="avatar" src="${avatar}" />
            <div class="health">health: <b> ${health} </b></div>
            ${healthBar}
            <div class="dice-container">
                ${diceHtml}
            </div>
        </div>`
        }

        // function to calculate damage
        this.takeDamage = attackScoreArray => {

            const totalAttackScore = attackScoreArray.reduce((total, currentAttack) => total + currentAttack)

            this.health -= totalAttackScore

            // if health reaches zero, character declared dead
            if (this.health <= 0) {
                this.health = 0
                this.dead = true
            }
        }

        // render out health bar - red if 25%
        this.getHealthBarHtml = function () {
            const percent = getPercentage(this.health, this.maxHealth)

            return `<div class="health-bar-outer">
                    <div class="health-bar-inner ${percent <= 25 ? `danger` : ``} " 
                    style="width: ${percent}%;">
                    </div>
                </div>`
        }
    }
}


    
export default Character