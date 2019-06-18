import { API, addList } from "./api.js";
import { triggerListener } from "./event.js";

API.getJson().then(addList);

triggerListener();
