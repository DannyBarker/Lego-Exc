let legoToSave = {
    creator: "",
    color: "",
    shape: "",
    creation: ""
}

let num = 1

let pickedColor = document.querySelector("#color");
let creatorName = document.querySelector("#nameInput");
let creationName = document.querySelector("#creationInput");
let pickedShape = document.querySelector("#shape");
let addCardHere = document.querySelector("#legoList")
let saveBtn = document.querySelector("#createLego");

const createString = (obj) => {
    return `${obj.creator} just made a ${obj.color}, ${obj.shape} lego called ${obj.creation}!`
}
const addToObj = () => {
    legoToSave.color = pickedColor.value;
    legoToSave.creator = creatorName.value;
    legoToSave.creation = creationName.value;
    legoToSave.shape = pickedShape.value;
}

const makeHTML = (arrObj) => {
    let newEl = document.createElement("div");
    newEl.setAttribute('id', `card-${num}`)
    newEl.innerHTML = `<p>${createString(arrObj)}</p>`
    return newEl
}

const addToDom = (section, card) => {
    section.appendChild(card)
}

const createCard = (jsonData) => {
    let newCard = makeHTML(jsonData)
    addToDom(addCardHere, newCard)
    num++
}
const getJson = () => {
   return fetch("http://localhost:8088/legos")
    .then( data => data.json())
    .then( legoObj => {
        legoObj.forEach(obj => {
            createCard(obj)
        });
    })
}

const addToJson = (newObj) => {
   return fetch("http://localhost:8088/legos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newObj)
    })
    .then( newStuff => newStuff.json())
}
getJson();
saveBtn.addEventListener('click', () => {
    addCardHere.innerHTML = "";
    if (pickedColor.value && creatorName.value && creationName.value && pickedShape.value) {
        addToObj()
        addToJson(legoToSave)
        .then(response => {
            getJson()
        })
    }
})