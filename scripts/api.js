import { createCard } from "./DOM.js";

const addList = jsonData => {
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
    }
}

export { API, addList };
