function hideElementById(elementId) {
    const h = document.getElementById(elementId)
    h.classList.add('hidden')
}
function showElementById(elementId) {
    const h = document.getElementById(elementId)
    h.classList.remove('hidden')
}

function setBackgroundColor(elementId) {
    const i = document.getElementById(elementId)
    i.classList.add('bg-orange-400')
}
function removeBackgroundColor(elementId) {
    const i = document.getElementById(elementId)
    i.classList.remove('bg-orange-400')
}

// -----------------------------score add/down------------------
function getElementTextIdById(elementId) {
    const element = document.getElementById(elementId)
    const elementInner = element.innerText;
    const elementParse = parseInt(elementInner);
    return elementParse

}

function setElementIdvalue(elementId,value) {
    const setId = document.getElementById(elementId)
    setId.innerText = value;
}


function getElementById(elementId) {
    const element = document.getElementById(elementId)
    const text = element.innerText
    return text
}
function getARandamAlphabet() {
    const alphabetsString =  'abcdefghijklmnopqrstuvwxys'
    const alphabets = alphabetsString.split('')


    const randamNumber = Math.random() * 25
    const number = Math.round(randamNumber);

    const index = alphabets[number];
    return index
  
}


