import { addToJson, getJson, addList } from "./api.js";

let pickedColor = document.querySelector("#color");
let creatorName = document.querySelector("#nameInput");
let creationName = document.querySelector("#creationInput");
let pickedShape = document.querySelector("#shape");
let addCardHere = document.querySelector("#legoList");
let saveBtn = document.querySelector("#createLego");

let legoToSave = {
  creator: "",
  color: "",
  shape: "",
  creation: ""
};

const addToObj = () => {
  legoToSave.color = pickedColor.value;
  legoToSave.creator = creatorName.value;
  legoToSave.creation = creationName.value;
  legoToSave.shape = pickedShape.value;
};

const triggerListener = () => {
  saveBtn.addEventListener("click", () => {
    addCardHere.innerHTML = "";
    if (pickedColor.value && creatorName.value && creationName.value && pickedShape.value) {
      addToObj();
      addToJson(legoToSave).then(response => {
        getJson().then(addList);
      });
    }
  });
};
export { triggerListener };
