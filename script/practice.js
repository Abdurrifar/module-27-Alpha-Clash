function play() {
    hideElementById('home-Screen')
    showElementById('play-Ground')
    gameContinue()

}

function gameContinue() {
  const alphabet=  setARandomNumber()
    console.log(' number is :', alphabet)


    const current = document.getElementById('current-Alphabet')
    current.innerText = alphabet;
    setBackGroundColor(alphabet)



}
