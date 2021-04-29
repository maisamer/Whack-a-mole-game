const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.more')
const timeLeft = document.querySelector('#time-left')
const PlayAgainButton  = document.querySelector("#button")
let score = document.querySelector('#score')

let currentTime = timeLeft.textContent
let result = 0 

let timerMoleId,countDouwnTimerId

function removeMoles(){
    squares.forEach(className=>{
        className.classList.remove('mole')
    })
}
function randomSquare(){
    removeMoles()
    let randomPosition = squares[Math.floor(Math.random()*9)]
    randomPosition.classList.add('mole')
    hitPosition = randomPosition.id;
}
squares.forEach(id=>{
    id.addEventListener('mouseup',()=>{
        if(id.id === hitPosition){
            result = result + 1
            score.textContent = result
            randomSquare()
        }
    })
})

function moveMole(){
    timerMoleId = setInterval(randomSquare,1000)
}

function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){    
        clearInterval(countDouwnTimerId)
        clearInterval(timerMoleId)
        removeMoles()
        PlayAgainButton.disabled = false
        alert('Game Over and your score is '+ result)
        //startTimer()
    }
    
}
function startPlay(){
    moveMole()
    countDouwnTimerId = setInterval(countDown,1000)
}
function playAgain(){
    result =0
    currentTime =60

    timeLeft.textContent = currentTime
    score.textContent = result
    PlayAgainButton.disabled = true
    startPlay()  
}

startPlay()