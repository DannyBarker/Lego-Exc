import { API, addList } from "./api.js";

let pickedColor = document.querySelector("#color");
let creatorName = document.querySelector("#nameInput");
let creationName = document.querySelector("#creationInput");
let pickedShape = document.querySelector("#shape");
let addCardHere = document.querySelector("#legoList");
let saveBtn = document.querySelector("#createLego");

const addToObj = (a, b, c, d) => {
  let legoToSave = {
    id: "",
    creator: "",
    color: "",
    shape: "",
    creation: ""
  };
  legoToSave.color = a
  legoToSave.creator = b
  legoToSave.creation = c
  legoToSave.shape = d
return legoToSave
};

const triggerListener = () => {
  saveBtn.addEventListener("click", () => {
    addCardHere.innerHTML = "";
    if (pickedColor.value && creatorName.value && creationName.value && pickedShape.value) {
      let obj = addToObj(pickedColor.value, creatorName.value, creationName.value, pickedShape.value);
      API.addToJson(obj).then( newData => API.getJson().then(addList));
    }
  });
};
const editEvent = ( editContainer) => {
  document.querySelector("#editLego").addEventListener('click', () => {
    let pickedColor = document.querySelector("#color-editor").value;
    let creatorName = document.querySelector("#name-editor").value;
    let creationName = document.querySelector("#creation-editor").value;
    let pickedShape = document.querySelector("#shape-editor").value;
    let addCardHere = document.querySelector("#legoList");
    addCardHere.innerHTML = "";
    let editObj = addToObj(pickedColor, creatorName, creationName, pickedShape);
    editObj.id = `${editContainer}`
    console.log(editObj);
    API.updateLego(editObj).then( newData => API.getJson().then(addList));
  })
}
export {triggerListener, addToObj, editEvent}