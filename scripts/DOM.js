let addCardHere = document.querySelector("#legoList");


const createString = obj => {
    return `${obj.creator} made a ${obj.color}, ${obj.shape} lego and named it "${obj.creation}"!`;
};


const makeHTML = (arrObj, num) => {
    let newEl = document.createElement("div");
    newEl.setAttribute("id", `card-${num}`);
    newEl.innerHTML = `<p>${createString(arrObj)}</p>`;
    return newEl;
};

const addToDom = (section, card) => {
    section.appendChild(card);
};

const createCard = (jsonData, num) => {
  let newCard = makeHTML(jsonData, num);
  addToDom(addCardHere, newCard);
};

export { createCard };
