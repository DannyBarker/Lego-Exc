let addCardHere = document.querySelector("#legoList");


const createString = obj => {
    return `${obj.creator} made a ${obj.color}, ${obj.shape} lego and named it "${obj.creation}"!`;
};

let num = 1;
const makeHTML = arrObj => {
    let newEl = document.createElement("div");
    newEl.setAttribute("id", `card-${num}`);
    newEl.innerHTML = `<p>${createString(arrObj)}</p>`;
    return newEl;
};

const addToDom = (section, card) => {
    section.appendChild(card);
    num++
};

const createCard = jsonData => {
  let newCard = makeHTML(jsonData);
  addToDom(addCardHere, newCard);
};

export { createCard };
