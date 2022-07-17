import characterData from "./data.js"
import Character from "./character.js"

document.getElementById("attack-button").addEventListener("click", attack)

let monstersArray = ["orc", "demon", "goblin"];

function attack() {
    if (wizard.dead || monster.dead) {
        // nothing happens - attack button effectively disabled
    } else {
        wizard.setDiceHtml()
        monster.setDiceHtml()
    
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()
        
        if (wizard.dead) {
            endGame()
        } else if (monster.dead) {
            if (monstersArray.length === 0) {
                endGame()
            } else {
                setTimeout (function() {
                    monster = getNewMonster()
                    render()
                }, 1500)
            }
        }
    }
}

function endGame() {
    const endMessage = wizard.health === 0 && monster.health === 0 ? "No victors - all creatures are dead" :
        wizard.health > 0 ? "The Wizard Wins" :
        `The ${monster.name} is Victorious`;

    const endEmoji = wizard.health === 0 ? `☠️` : `🔮`
    
    setTimeout(function() {
        document.body.innerHTML = 
            `<div class="end-game">
                <h2>Game Over</h2>
                <h3>${endMessage}</h3>
                <p class="end-emoji">${endEmoji}</p>
            </div>`;
    }, 1500)
}
 
function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}


const wizard = new Character(characterData.hero)
let monster = getNewMonster()

render()

