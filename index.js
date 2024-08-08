let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEle = document.querySelector("#message")
let sumEle = document.getElementById("sum")
let cardsEle = document.getElementById("cards")
function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1
    if(randomCard > 10){
        return 10
    }
    else if(randomCard === 1){
        return 11
    }
    else{
    return randomCard
    }
}
function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    cards=[firstCard,secondCard]
    sum = firstCard+secondCard
    renderGame()
}
function renderGame(){
    cardsEle.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEle.textContent += cards[i]+",";
        
    }
    sumEle.textContent = "Sum : "+sum
    if(sum<21){
        message = "Do you want to draw new card ?"
    }
    else if(sum===21){
        message = "Congratulations!!! You have BlackJack."
        hasBlackJack = true
        
    }
    else{
        message = "Sorry! you are out of the game."
        isAlive = false
        
    }
    messageEle.textContent = message
}
function newCard(){
    console.log("Drawing a new card from the deck for you!")
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    if (isAlive===true&&hasBlackJack===false) {
        renderGame()
    }
    else{
        messageEle.textContent = "Sorry you have reached your limit! please start new game to continue."
    }
}
