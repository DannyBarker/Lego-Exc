import { createCard } from "./DOM.js";

const addList = jsonData => {
  let addCardHere = document.querySelector("#legoList");
  addCardHere.innerHTML = "";
    let num = 1
  jsonData.forEach(obj => {
    createCard(obj, num);
    num++;
  });
};
const API = {
    getJson: () => {
        return fetch("http://localhost:8088/legos").then(data => data.json());
    },
    addToJson: newObj => {
        return fetch("http://localhost:8088/legos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newObj)
  }).then(newStuff => newStuff.json())
    },
    deleteLego: id => {
      return fetch (`http://localhost:8088/legos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      })
    },
    updateLego: (updatedLego) => {
      return fetch(`http://localhost:8088/legos/${updatedLego.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedLego)
      })
    }
}

export { API, addList };
