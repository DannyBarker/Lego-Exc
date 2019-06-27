import { API, addList } from "./api.js";
import {editEvent} from "./event.js"

let addCardHere = document.querySelector("#legoList");


const createString = obj => {
    return `${obj.creator} made a ${obj.color}, ${obj.shape} lego and named it "${obj.creation}"!`;
};

const createEditForm = (obj) => {
    let div = document.createElement('div')
    div.setAttribute('id', `lego-editor-${obj.id}`)
    let cancelBtn = document.createElement('button')
    cancelBtn.innerHTML = 'Cancel Edit'
    cancelBtn.setAttribute('id', `cancel-edit-${obj.id}`)
    cancelBtn.addEventListener('click', () => {
       let parent = document.querySelector(`#editFormContainer-${obj.id}`)
       parent.removeChild(parent.childNodes[0])
    })
    div.innerHTML = `
    <div id="lego-editor-${obj.id}">
        <input type="text" id="name-editor" placeholder="My name" value="${obj.creator}">
        <input type="text" id="creation-editor" placeholder="Creation name" value="${obj.creation}">
        <select name="color" id="color-editor">
            <option value="red" ${obj.color === "red" ? "selected" : ""}>Red</option>
            <option value="blue" ${obj.color === "blue" ? "selected" : ""}>Blue</option>
            <option value="black" ${obj.color === "black" ? "selected" : ""}>Black</option>
            <option value="yellow" ${obj.color === "yellow" ? "selected" : ""}>Yellow</option>
        </select>
        <select name="shape" id="shape-editor">
            <option value="${obj.shape}">${obj.shape}</option>
            <option value="circle">Circle</option>
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
            <option value="triangle">Triangle</option>
            <option value="animal">Animal</option>
        </select>
        <button id="editLego">Submit Edit</button>
    </div>
    `
    div.appendChild(cancelBtn)
    return div
}

const addEditFormToDOM = ( editContainer, editForm) => {
    if (document.querySelector(`#editFormContainer-${editContainer}`).innerHTML === '') {
        document.querySelector(`#editFormContainer-${editContainer}`).appendChild(editForm)
        editEvent( editContainer)
    }
}

const makeHTML = (arrObj, num) => {
    let newEl = document.createElement("div");
    let upDate = document.createElement('button')
    let delBtn = document.createElement('button')
    let editDiv = document.createElement('div')
    editDiv.setAttribute('id', `editFormContainer-${arrObj.id}`)
    delBtn.setAttribute('id', `${arrObj.id}`)
    delBtn.innerHTML = 'Delete Lego'
    upDate.innerHTML = 'Edit Lego'
    delBtn.addEventListener('click', () => {
        let id = arrObj.id
        API.deleteLego(id).then( data => API.getJson().then(addList))
    })
    upDate.addEventListener('click', () => {
        let id = arrObj.id
        let html = createEditForm(arrObj)
        addEditFormToDOM(id, html)
    })
    newEl.setAttribute("id", `card-${num}`);
    newEl.innerHTML = `<p>${createString(arrObj)}</p>`;
    newEl.appendChild(editDiv)
    newEl.appendChild(upDate)
    newEl.appendChild(delBtn)
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
