'use strict'

let player = 1;
let turn = 1;

//PLAYER TURN
const turnReset = function (playerScore)
{
    playerScore.textContent = 0;
    
        if(player === 1) player++;
        else 
        {
            player--;
            turn++;
            console.log(turn);
        }
}
const addToCurrent = function (diceValue)
{
    const playerScore = document.querySelector('.current'+player+'Value');
    
    if(diceValue !== 1){
        playerScore.textContent = Number(playerScore.textContent) + Number(diceValue);
    }
    else
    {
        turnReset(playerScore);
    }
}

//DICE IMAGES
const resetImage = function ()
{
    const resetImg = document.querySelectorAll('.img');
    for(let i = 1; i <= 6; i++)
    {
        if(!resetImg[i-1].classList.contains('img'+i))   
            resetImg[i-1].classList.add('img'+i)
    }
}
const showImage = function (diceValue) 
{
    resetImage();
    document.querySelector('.img'+diceValue).classList.remove('img'+diceValue);
}

//RANDOM DICE GENERATOR
const rollTheDice = function () {
    if(turn <= 10)
    { 
        const diceValue = Math.floor(Math.random() * 6 + 1);
        showImage(diceValue);
        addToCurrent(diceValue);
    }
    else {

        const winner = document.querySelector('.winnerDeclaration'); 
        const scoreCompare = document.querySelectorAll('.score');

        if(scoreCompare[0].textContent > scoreCompare[1].textContent) winner.textContent = `Player 1 Won the 
        😍🎆🎈🎇🧨✨🎉🎊🎁🎀🎗`;
        else if(scoreCompare[0].textContent < scoreCompare[1].textContent) winner.textContent = `Player 2 Won the Game
        😍🎆🎈🎇🧨✨🎉🎊🎁🎀🎗`;
        else winner.textContent = `It's a tie lmao`;

        const endGame1 = document.querySelector('.endGame');
        const endGame2 = document.querySelector('.modalWindow');
        endGame1.classList.remove('overlay');
        endGame2.classList.remove('overlay');
    }
}

//HOLDING VALUE
const addValue = function ()
{
    const playerScore = document.querySelector('.current'+player+'Value');
    const totalScore = document.querySelector('.player'+player+'Score');
    
    totalScore.textContent = Number(playerScore.textContent) + Number(totalScore.textContent);

    turnReset(playerScore);
}


//New Game
const completeGame = function ()
{
    player = 1;
    turn = 1;

    const currentReset = document.querySelectorAll('.currentValue');
    const scoreReset = document.querySelectorAll('.score');

    for(let i = 0; i < 2; i++)
    {
        currentReset[i].textContent = 0;
        scoreReset[i].textContent = 0;
    }
    resetImage();
    const endGame1 = document.querySelector('.endGame');
    const endGame2 = document.querySelector('.modalWindow');
    
    endGame1.classList.add('overlay');
    endGame2.classList.add('overlay');
}

//Help Menu
const showHelp = function ()
{
    const overlayHelp = document.querySelectorAll('.overlay2');
    overlayHelp[0].classList.remove('overlay2');
    overlayHelp[1].classList.remove('overlay2');
}
const returnFromHelp = function ()
{
    const overlayHelp1 = document.querySelector('.helpWindow');
    const overlayHelp2 = document.querySelector('.blacky');
    
    if(!overlayHelp1.classList.contains('overlay2') && !overlayHelp2.classList.contains('overlay2')){
        overlayHelp1.classList.add('overlay2');
        overlayHelp2.classList.add('overlay2');
    }
}

//Event Listeners
document.querySelector('.rollDice').addEventListener('click', rollTheDice);
document.querySelector('.hold').addEventListener('click', addValue);
document.querySelector('.newGame').addEventListener('click', completeGame);
document.querySelector('.overlayNewGame').addEventListener('click', completeGame);
document.querySelector('.help').addEventListener('click', showHelp);
document.querySelector('.blacky').addEventListener('click', returnFromHelp);
document.querySelector('.closeHelp').addEventListener('click', returnFromHelp)
document.addEventListener('keydown', returnFromHelp);