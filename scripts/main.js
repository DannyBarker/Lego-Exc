import { getJson, addList } from "./api.js";
import { triggerListener } from "./event.js";

getJson().then(legoObj => addList(legoObj));

triggerListener();
