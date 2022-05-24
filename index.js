import characterData from "./data.js"

import Character from "./character.js"

const attackBtn = document.getElementById("attack-button")

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)

 
function render(hero, monster) {
    document.getElementById("hero").innerHTML = hero.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

render(wizard, orc)