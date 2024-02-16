function handleKeyboardButton(event) {
    const playerPressed = event.key;

    if (playerPressed === 'Escape') {
        gameOver()
    }
    

    const currentAlphabeElement = document.getElementById('current-Alphabet')
    const currentAlphabe = currentAlphabeElement.innerText
    const expectAlphabet = currentAlphabe.toLowerCase()
    console.log(expectAlphabet, playerPressed)
    
    if (playerPressed === expectAlphabet) {
       

        const id = getElementTextIdById('current-scoure')
        const updateScore = id + 1;
        setElementIdvalue('current-scoure',updateScore)
        removeBackgroundColor(expectAlphabet)
        gameContinue()
    
    }
    else {
       
        const id = getElementTextIdById('life-score')
        const updateScore = id -1;
        setElementIdvalue('life-score', updateScore)
        if (updateScore === 0) {
          gameOver()
        }
   
    }
    
  }
document.addEventListener('keyup',handleKeyboardButton)



function gameContinue() {
    const alphabet = getARandamAlphabet()
    console.log('your random Alphabet:', alphabet)
    const currentAlphabet = document.getElementById('current-Alphabet')
    currentAlphabet.innerText = alphabet;

    setBackgroundColor(alphabet)
}
   


function play() {

    // only play ground is show
    hideElementById('home-Screen')
    hideElementById('final-score')
    showElementById('play-Ground')

    setElementIdvalue('life-score',5)
    setElementIdvalue('current-score')
    gameContinue()
}
function gameOver() {

    hideElementById('play-Ground')
    showElementById('final-score')


    // score update
    const lastScore = getElementTextIdById('current-scoure')
    setElementIdvalue('last-score', lastScore)
    
    // clear last select
    const getElement = getElementById(current-Alphabet)
    removeBackgroundColor('current-Alphabet')
}