let player = {
    name: "Kevin",
    chips: 190
}
let titleEl = document.getElementById("title-el")
let card = []
let sum = 0
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let message = ""
let isAlive = false
let hasBlackJack = false
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips
// let cardDrawEl = document.getElementById("card-draw")

function getRandomCard(){
    
    let randomNumbers = Math.floor(Math.random() * 13 ) + 1
    if(randomNumbers > 10){
        return 10
    } 
    else if(randomNumbers === 1){
        return 11
    } else{
        return randomNumbers
    }

}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    card = [firstCard, secondCard]
    isAlive = true
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "

    for(let i = 0; i < card.length; i++){
        cardsEl.textContent += card[i] + " - "
    }

    sumEl.textContent = "Sum: " + sum
    if(sum <= 20){
        message = "Do you want to draw a new card?"
        titleEl.textContent = message
    }
    else if(sum === 21){
        message = "You've got Blackjack!"
        titleEl.textContent = message
        hasBlackJack = true
    }else{
        message = "You are out of the game!"
        titleEl.textContent = message
        isAlive = false
    }
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let drawCard = getRandomCard()
        card.push(drawCard)
        sum += drawCard
        // cardDrawEl.textContent += drawCard + " - "
        renderGame()
    }

}